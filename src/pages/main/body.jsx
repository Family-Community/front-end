import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import glasses from '../../assets/images/magnifying-glass-solid.svg';
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import { getMemberInfo, getPostInfo, getSearchInfo, reaction } from "../../apis/mainApi/apis";
import useInput from "../../hooks/useInput";

function Body() {
    // familyCode
    const familyCode = useParams().familyCode;

    // familyId, memberId 가져오기
    let familyId = '';
    let memberId = '';
    const location = useLocation();
    try {
        familyId = location.state.familyId;
        memberId = location.state.memberId;
    } catch (err) {

    }

    // memberInfo 가져오기
    const navigate = useNavigate();
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const findMemberInfo = async () => {
        // 정상 접근 시
        try {
            const memberInfo = await getMemberInfo(familyId, memberId);
            setColor(memberInfo[0]);
            setImage(memberInfo[1]);
            setName(memberInfo[2]);
        }
        // 비정상 접근 시
        catch (err) {
            console.log(err)
        }
    }

    // color, name, image를 갖췄을 때
    if (color && name) {
        const profileImg = document.getElementById("profileImg");
        profileImg.style.backgroundImage = `url(${image})`;
    }

    //헤더
    function MainHeader() {
        const handleOnClick = (e) => {
            console.log('logo click event');
        }

        return (
            <MainHeaderBox>
                <p onClick={handleOnClick}></p>
                <input
                    type="text"
                    placeholder="게시물 검색"
                />
                <img src={glasses} />
                <ProfileLink to={`/${familyCode}/${memberId}`}>
                    <p id="profileImg"></p>
                </ProfileLink>
            </MainHeaderBox>

        )
    }

    // post 가져오기
    const [post, setPost] = useState('');
    const findPostInfo = async () => {
        //정상 접근 시
        try {
            const postInfo = await getPostInfo(familyId);
            setPost(postInfo);
        } catch (err) {
            //비정상 접근 시
            // navigate(`/${familyCode}/profileAuth`);
            console.log(err);
        }
    }

    //post 띄우기
    const setFeeds = async (numberOfPostNumber) => {
        const feedBox = document.getElementById('feedBox');
        if (feedBox) {
            // 초기화
            feedBox.innerHTML = '';
            for (let i = 0; i < numberOfPostNumber; i++) {
                //이전까지의 피드
                const prev = feedBox.innerHTML;

                // 새로 추가될 피드
                const postId = post[i].id;
                const image = post[i].member.image;
                const name = post[i].member.name;
                const photo = post[i].photo;
                if (!image) {
                    image = profile;
                }
                const title = post[i].title;
                const content = post[i].content;
                const date = post[i].date;
                const smileCnt = post[i].smile_cnt;
                const goodCnt = post[i].good_cnt;
                const sadCnt = post[i].sad_cnt;
                const heartCnt = post[i].heart_cnt;
                const worryCnt = post[i].worry_cnt;
                const checkCnt = post[i].check_cnt;

                // 게시물 렌더링
                feedBox.innerHTML = prev + `
                <div>
                    <img src=${image}/>
                    <p>${name}</p>
                    <p>삭제</p> 
                    <p>|</p> 
                    <p>수정</p> 
                    <img src=${photo} /> 
                    <p>${title}</p>
                    <p>${content}</p>
                    <p id="clickSmile${postId}">😄</p>
                    <p id="clickSmileCnt">${smileCnt}</p>
                    <p id="clickGood${postId}">👍</p>
                    <p id="clickGoodCnt">${goodCnt}</p>
                    <p id="clickSad${postId}">😥</p>
                    <p id="clickSadCnt">${sadCnt}</p>
                    <p id="clickHeart${postId}">💗</p>
                    <p id="clickHeartCnt">${heartCnt}</p>
                    <p id="clickWorry${postId}">😧</p>
                    <p id="clickWorryCnt">${worryCnt}</p>
                    <p id="clickCheck${postId}">✔</p>
                    <p id="clickCheckCnt">${checkCnt}</p>    
                </div>
            `;

            }

        }

    }
    // post에 뭔가가 들어 있으면
    if (post) {
        const numberOfPostNumber = post.length;
        setFeeds(numberOfPostNumber);
    }

    // 글쓰기 버튼 누를 시
    const handleOnClickPosting = () => {
        navigate(`/${familyCode}/posting`, { state: { 'memberId': memberId, 'familyId': familyId } });
    }

    useEffect(() => {
        // post 불러오기
        findPostInfo();
    }, []);

    // 검색 구현
    const [searchContent, onChangeSearchContent, setSearchContent] = useInput('');
    const findSearchInfo = async () => {
        const post = await getSearchInfo(familyId, searchContent);
        setPost(post);
    }
    if (searchContent) {
        findSearchInfo();
    }

    //리액션 업데이트할 state 선언
    const [updatedSmileCnt, setUpdatedSmileCnt] = useState(0);
    const [updatedGoodCnt, setUpdatedGoodCnt] = useState(0);
    const [updatedSadCnt, setUpdatedSadCnt] = useState(0);
    const [updatedHeartCnt, setUpdatedHeartCnt] = useState(0);
    const [updatedWorryCnt, setUpdatedWorryCnt] = useState(0);
    const [updatedCheckCnt, setUpdatedCheckCnt] = useState(0);

    useEffect(() => {
        const clickSmileCnt = document.getElementById('clickSmileCnt');
        const clickGoodCnt = document.getElementById('clickGoodCnt');
        const clickSadCnt = document.getElementById('clickSadCnt');
        const clickHeartCnt = document.getElementById('clickHeartCnt');
        const clickWorryCnt = document.getElementById('clickWorryCnt');
        const clickCheckCnt = document.getElementById('clickCheckCnt');
    
        if (clickSmileCnt && clickGoodCnt && clickSadCnt && clickHeartCnt && clickWorryCnt && clickCheckCnt) {
            setUpdatedSmileCnt(parseInt(clickSmileCnt.innerText));
            setUpdatedGoodCnt(parseInt(clickGoodCnt.innerText));
            setUpdatedSadCnt(parseInt(clickSadCnt.innerText));
            setUpdatedHeartCnt(parseInt(clickHeartCnt.innerText));
            setUpdatedWorryCnt(parseInt(clickWorryCnt.innerText));
            setUpdatedCheckCnt(parseInt(clickCheckCnt.innerText));
        }
    }, []);

    // 리액션 구현
    const handleOnClick = async (e) => {
        e.preventDefault();
        const order = e.target.id;
        // clickSmile을 클릭했을 때
        const postId = order.replace(/\D/g, ''); //문자 제거
        const clickReaction = order.replace(/[^a-zA-Z]/g, ''); //숫자 제거
        let reactionNum = 0;

        if (clickReaction === "clickSmile") {
            setUpdatedSmileCnt(updatedSmileCnt + 1);
            reactionNum = 1;
        }
        else if (clickReaction === "clickGood") {
            setUpdatedGoodCnt(updatedGoodCnt + 1);
            reactionNum = 2;
        }
        else if (clickReaction === "clickSad") {
            setUpdatedSadCnt(updatedSadCnt + 1);
            reactionNum = 3;
        }
        else if (clickReaction === "clickHeart") {
            setUpdatedHeartCnt(updatedHeartCnt + 1);
            reactionNum = 4;
        }
        else if (clickReaction === "clickWorry") {
            setUpdatedWorryCnt(updatedWorryCnt + 1);
            reactionNum = 5;
        }
        else if (clickReaction === "clickCheck") {
            setUpdatedCheckCnt(updatedCheckCnt + 1);
            reactionNum = 6;
        }

        await reaction(familyId, memberId, postId, reactionNum)
    }

    return (
        <div>
            <MainHeader />
            <input
                type="text"
                placeholder="게시물 검색"
                onChange={onChangeSearchContent}
            />
            <MainBox>
                <div id="feedBox" onClick={handleOnClick}>
                </div>
            </MainBox>
            <ButtonContainer>
                <button onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>



    )

};


export default Body;