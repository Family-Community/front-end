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

    // 로고 클릭시
    const handleOnClickLogo = (e) => {
        console.log('logo click event');
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

    const [reactionOn, setReactionOn] = useState(false);
    // 리액션 업데이트할 state
    const [smileCnt, setSmileCnt] = useState(0);
    const [goodCnt, setGoodCnt] = useState(0);
    const [sadCnt, setSadCnt] = useState(0);
    const [heartCnt, setHeartCnt] = useState(0);
    const [worryCnt, setWorryCnt] = useState(0);
    const [checkCnt, setCheckCnt] = useState(0);

    //post 띄우기
    const setFeeds = async (numberOfPostNumber, e, order) => {
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
                let photo = post[i].photo;
                if (!image) {
                    image = profile;
                }
                const title = post[i].title;
                const content = post[i].content;
                const date = post[i].date;
                
                if (post[i].smile_cnt !== 0) {
                    setSmileCnt(post[i].smile_cnt);
                }
                else if (post[i].good_cnt !== 0) {
                    setGoodCnt(post[i].good_cnt);
                }
                else if (post[i].sad_cnt !== 0) {
                    setSadCnt(post[i].sad_cnt);
                }
                else if (post[i].heart_cnt !== 0) {
                    setHeartCnt(post[i].heart_cnt);
                }
                else if (post[i].worry_cnt !== 0) {
                    setWorryCnt(post[i].worry_cnt);
                }
                else if (post[i].check_cnt !== 0) {
                    setCheckCnt(post[i].check_cnt);
                }


                // 게시물 렌더링
                feedBox.innerHTML = prev + `
                <div id=${postId}>
                    <img src=${image}/>
                    <p>${name}</p>
                    <p>삭제</p> 
                    <p>|</p> 
                    <p id="edit">수정</p> 
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
                if (reactionOn && e && order) {
                    let reactionNum = 0;
                    const numberOfPostNumber = post.length;
                    const postId = order.replace(/\D/g, ''); // 문자 제거
                    const clickReaction = order.replace(/[^a-zA-Z]/g, ''); // 숫자 제거

                    if (clickReaction === 'clickSmile') {
                        setSmileCnt(smileCnt + 1);
                        reactionNum = 1;
                    } else if (clickReaction === 'clickGood') {
                        setGoodCnt(goodCnt + 1);
                        reactionNum = 2;
                    } else if (clickReaction === 'clickSad') {
                        setSadCnt(sadCnt + 1);
                        reactionNum = 3;
                    } else if (clickReaction === 'clickHeart') {
                        setHeartCnt(heartCnt + 1);
                        reactionNum = 4;
                    } else if (clickReaction === 'clickWorry') {
                        setWorryCnt(worryCnt + 1);
                        reactionNum = 5;
                    } else if (clickReaction === 'clickCheck') {
                        setCheckCnt(checkCnt + 1);
                        reactionNum = 6;
                    }
                    //post 요청 보내는 부분
                    await reaction(navigate, familyCode, familyId, memberId, postId, reactionNum);
                }
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

    // 리액션 클릭했을 때
    const handleOnClick = async (e) => {
        e.preventDefault();
        //clickSmile35면
        const order = e.target.id;
        //35
        setReactionOn(true);
        // setFeeds 함수 호출 시 numberOfPostNumber와 이벤트 객체(e) 전달
        const numberOfPostNumber = post.length;
        setFeeds(numberOfPostNumber, e, order);

        // 수정 버튼 누를 시
        if (order === 'edit') {
            // postId 따기
            const currPostId = e.target.parentNode.id;
            // 수정 페이지로
            navigate(`/${familyCode}/${memberId}/${currPostId}/update`);
            return;
        }

    }
    return (
        <div>
            <MainHeaderBox>
                <p onClick={handleOnClick}></p>
                <input
                    type="text"
                    placeholder="게시물 검색"
                    onChange={onChangeSearchContent}
                />
                <img src={glasses} />
                <ProfileLink to={`/${familyCode}/${memberId}`}>
                    <p id="profileImg"></p>
                </ProfileLink>
            </MainHeaderBox>
            <MainBox>
                <div id="feedBox" onClick={handleOnClick}>
                </div>
            </MainBox>
            <ButtonContainer>
                <button onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>
    )


}

export default Body;