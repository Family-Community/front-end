import { MyPageBody } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { getFamilyInfo, getMemberInfo, getMemberPost, deletePost, addReaction } from "../../apis/mypageApi/apis";
import { useEffect, useState } from "react";
import profile from "../../assets/images/profile.svg";

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
        if (!image) {
            imageBox.style.backgroundImage = `url(${profile})`;
        }
        else{
            imageBox.style.backgroundImage = `url(${image})`;
        }
        

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
        feedBox.style.fontSize = '100%';
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
            const memberIdOfPost = post[i].member.id;

            // post 추가하기
            feedBox.innerHTML = prevPost + `
                <div id="${postId}" style="border : 2px solid ${color}">
                    <div>
                        <p id="${memberIdOfPost}" style="background-image : url(${image})"></p>
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
                            <p id="cntSmile${postId}">${smileCnt}</p>
                            <p id="cntGood${postId}">${goodCnt}</p>
                            <p id="cntSad${postId}">${sadCnt}</p>
                            <p id="cntHeart${postId}">${heartCnt}</p>
                            <p id="cntWorry${postId}">${worryCnt}</p>
                            <p id="cntCheck${postId}">${checkCnt}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }

    // 피드 클릭 시 구현
    const handleOnClickPost = async (e) => {
        const order = e.target.id;
        // 수정 클릭 시
        if (order === 'edit'){
            const postId = e.target.parentElement.parentElement.id;
            navigate(`/${familyCode}/${memberId}/${postId}/update`);
        }
        // 삭제 클릭 시
        else if (order === 'delete'){
            if (me === 'true'){
                const check = window.confirm('정말 삭제하시겠습니까?');
                if(check){
                    const postId = e.target.parentElement.parentElement.id;
                    deletePost(navigate, familyId, memberId, postId, familyCode);
                }
            }
            else{
                alert('본인의 게시물이 아니면 삭제할 수 없어요');
            }
        }
        // 리액션 클릭 시
        else if (order.slice(0, 5) === 'click'){
            const reactionType = order.slice(5);
            const postId = e.target.parentElement.parentElement.parentElement.id;
            if (reactionType === 'Smile'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 1);
                const cntSmile = document.getElementById(`cntSmile${postId}`);
                const currCnt = Number(cntSmile.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntSmile.innerText=`${currCnt+1}`;
                }
                // 내려갈 경우
                else{
                    cntSmile.innerText=`${currCnt-1}`;
                }
            }
            else if (reactionType === 'Good'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 2);
                const cntGood = document.getElementById(`cntGood${postId}`);
                const currCnt = Number(cntGood.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntGood.innerText=`${currCnt + 1}`;
                }
                // 내려갈 경우
                else{
                    cntGood.innerText=`${currCnt - 1}`;
                }
            }
            else if (reactionType === 'Sad'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 3);
                const cntSad = document.getElementById(`cntSad${postId}`);
                const currCnt = Number(cntSad.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntSad.innerText=`${currCnt + 1}`;
                }
                // 내려갈 경우
                else{
                    cntSad.innerText=`${currCnt - 1}`;
                }
            }
            else if (reactionType === 'Heart'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 4);
                const cntHeart = document.getElementById(`cntHeart${postId}`);
                const currCnt = Number(cntHeart.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntHeart.innerText=`${currCnt + 1}`;
                }
                // 내려갈 경우
                else{
                    cntHeart.innerText=`${currCnt - 1}`;
                }
            }
            else if (reactionType === 'Worry'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 5);
                const cntWorry = document.getElementById(`cntWorry${postId}`);
                const currCnt = Number(cntWorry.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntWorry.innerText=`${currCnt + 1}`;
                }
                // 내려갈 경우
                else{
                    cntWorry.innerText=`${currCnt - 1}`;
                }
            }
            else if (reactionType === 'Check'){
                const reactionCheck = await addReaction(familyId, memberId, postId, 6);
                const cntCheck = document.getElementById(`cntCheck${postId}`);
                const currCnt = Number(cntCheck.innerText);
                // 올라갈 경우
                if (reactionCheck) {
                    cntCheck.innerText=`${currCnt + 1}`;
                }
                // 내려갈 경우
                else{
                    cntCheck.innerText=`${currCnt - 1}`;
                }
            }
        }
    }

    useEffect(() => {
        findUserPost();
    }, [])

    return (
        <MyPageBody>
            <div id="userInfoBox">
                <p><span id="nameSpan"></span> 님의 게시물</p>
                <p id="imageBox"></p>
            </div>
            <div id="feedBox" onClick={handleOnClickPost}>
                {Array.isArray(post) && post.length > 0 ? (
                    setFeeds()
                    ) : (
                        '아직 게시글이 없어요'
                )}
            </div>
            <p id="toEditProfileBtn" onClick={handleOnClickToEditProfile}>내 정보 수정</p>
        </MyPageBody>
    )
}

export default Body;