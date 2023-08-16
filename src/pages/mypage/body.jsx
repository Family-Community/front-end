import { MyPageBody } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { getFamilyInfo, getMemberInfo, getMemberPost } from "../../apis/mypageApi/apis";
import { useEffect, useState } from "react"; 

function Body() {

    // familyCode, memberId, me(접근자 정보) 뽑기
    const familyCode = useParams().familyCode;
    const memberId = useParams().memberId;
    const me = useParams().me;

    // familyId, color, familyName, name, image 가져오기
    const [familyId, setFamilyId] = useState('');
    const [color, setColor] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const findFamilyInfo = async () => {
        const familyInfo = await getFamilyInfo(familyCode);
        const familyId = familyInfo[0];
        const color = familyInfo[1];
        const familyName = familyInfo[2];
        setFamilyId(familyId);
        setColor(color);
        setFamilyName(familyName);
    }
    findFamilyInfo();
    const findMemberInfo = async() => {
        const memberInfo = await getMemberInfo(familyId, memberId);
        const name = memberInfo[0];
        const image = memberInfo[1];
        setName(name);
        setImage(image);
    }
    if(familyId && color && familyName){
        findMemberInfo();
    }

    // color, memberInfo 적용
    if(color && name && familyName){

        const nameSpan = document.getElementById('nameSpan');
        nameSpan.innerText = name;
        nameSpan.style.color = color;

        const imageBox = document.getElementById('imageBox');
        imageBox.style.backgroundImage = `url(${image})`;

        const toEditProfileBtn = document.getElementById('toEditProfileBtn');
        toEditProfileBtn.style.backgroundColor = color;
        // 접속 인물 == 프로필 인물이 아닐 시
        if (me === 'true') {
            toEditProfileBtn.style.display = 'block';
        }
    }

    // 내 정보 수정 버튼 클릭 시
    const navigate = useNavigate();
    const handleOnClickToEditProfile = () => {
        navigate(`/${familyCode}/${memberId}/profileEdit`);
    }

    // 유저의 게시글 불러오기
    const [post, setPost] = useState('');
    const findUserPost = async() => {
        const post = await getMemberPost(memberId);
        setPost(post);
    }

    // 피드 보여주기
    const setFeeds = () => {
        const feedBox = document.getElementById('feedBox');
        const lenOfPost = post.length;
        // 초기화
        feedBox.innerHTML = '';
        for (let i=0; i < lenOfPost; i++){
            // 이전까지의 post
            const prevPost = feedBox.innerHTML;

            // 새로 추가할 post의 정보
            const postId = post[i].id;
            const image = post[i].member.image;
            const photo = post[i].photo;
            const title = post[i].title;
            const content = post[i].content;
            const checkCnt = post[i].check_cnt;
            const goodCnt = post[i].good_cnt;
            const heartCnt = post[i].heart_cnt;
            const sadCnt = post[i].sad_cnt;
            const smileCnt = post[i].smile_cnt;
            const worryCnt = post[i].worry_cnt;

            // post 추가하기
            feedBox.innerHTML = prevPost + `
                <div id="${postId}" style="border : 2px solid ${color}">
                    <div>
                        <p style="background-image : url(${image})"></p>
                        <p>${title}</p>
                        <p id="edit">수정</p>
                        <p id="delete">삭제</p>
                    </div>
                    <div id="photoBox" style="background-image : url(${photo})"></div>
                    <div id="contentBox" style="border : 2px solid ${color}">${content}</div>
                    <div id="reactionBox">
                        <div>
                            <p id="clickSmile">😄</p>
                            <p id="clickGood">👍</p>
                            <p id="clickSad">😥</p>
                            <p id="clickHeart">💗</p>
                            <p id="clickWorry">😧</p>
                            <p id="clickCheck">✔</p>
                        </div>
                        <div>
                            <p>${smileCnt}</p>
                            <p>${goodCnt}</p>
                            <p>${sadCnt}</p>
                            <p>${heartCnt}</p>
                            <p>${worryCnt}</p>
                            <p>${checkCnt}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }

    // 피드 클릭 시 구현
    const handleOnClickPost = (e) => {
        const order = e.target.id;
    }

    useEffect(() => {
        findUserPost();
    },[])

    return (
        <MyPageBody>
            <div id="userInfoBox">
                <p><span id="nameSpan"></span> 님의 게시물</p>
                <p id="imageBox"></p>
            </div>
            <div id="feedBox" onClick={handleOnClickPost}>
                {Array.isArray(post) ? setFeeds() : '아직 피드가 없어요'}
            </div>
            <p id="toEditProfileBtn" onClick={handleOnClickToEditProfile}>내 정보 수정</p>
        </MyPageBody>
    )
}

export default Body;