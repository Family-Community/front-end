import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import logo from "../../assets/images/logo.png";
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

    const setProfileImage = () => {
        const profileimg = document.getElementById('profileimg');
        profileimg.style.backgroundImage = `url(${image})`;
    }

    useEffect(()=> {
        findMemberInfo();
        setProfileImage();
    },[])

    // // color, name, image를 갖췄을 때
    // useEffect(() => {
    //     if (color && name) {
    //         if (!image) {
    //             image = profile;
    //         } 
            // const profileImg = document.getElementById("profileImg");
            // profileImg.style.backgroundImage = `url(${image})`;
            
    //     }
    // }, []);

    // 컬러 설정
    if (familyId && color){
        const postingBtn = document.getElementById('postingBtn');
        postingBtn.style.backgroundColor = `${color}`;
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
    const setFeeds = (numberOfPostNumber) => {
        const feedBox = document.getElementById('feedBox');
        if (feedBox) {
            // 초기화
            feedBox.innerHTML = '';
            if (numberOfPostNumber === 0) {
                feedBox.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
                <p3 id="noPost" style="font-size: 18px; color: ${color};">아직 게시물이 없어요</p3>
                </div>
                `;
            } else {
                for (let i = 0; i < numberOfPostNumber; i++) {
                    //이전까지의 피드
                    const prev = feedBox.innerHTML;

                    // 새로 추가될 피드
                    const postId = post[i].id;
                    let image = post[i].member.image;
                    const name = post[i].member.name;
                    let photo = post[i].photo;
                    const postMemberId = post[i].member.id;
                    if (!image) {
                        image = profile;
                    }
                    const title = post[i].title;
                    const content = post[i].content;
                    const date = post[i].date;

                    let smileCnt = post[i].smile_cnt;
                    let goodCnt = post[i].good_cnt;
                    let sadCnt = post[i].sad_cnt;
                    let heartCnt = post[i].heart_cnt;
                    let worryCnt = post[i].worry_cnt;
                    let checkCnt = post[i].check_cnt;

                    // 게시물 렌더링
                    feedBox.innerHTML = prev + `
                    <div id=${postId}>
                        <img src=${image} id="toMyPage_${postMemberId}"/>
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

    // feedBox 클릭 시
    const handleOnClick = async (e) => {
        e.preventDefault();
        // order -> 다음 동작의 명령
        const order = e.target.id;

        // 수정 버튼 누를 시
        if (order === 'edit') {
            // postId 따기
            const currPostId = e.target.parentNode.id;
            // 수정 페이지로
            navigate(`/${familyCode}/${memberId}/${currPostId}/update`);
            return;
        }

        // 프로필 사진을 선택했다면 (게시글의)
        else if (order.slice(0, 8) === 'toMyPage') {
            const postMemberId = order.slice(9);
            // 누른 사람과 프로필 사진의 사람이 같으면
            if (postMemberId === memberId) {
                navigate(`/${familyCode}/${postMemberId}/true`);
            }
            else {
                navigate(`/${familyCode}/${postMemberId}/false`);
            }
        }

        // 리액션을 클릭했다면
        else if (order.slice(0, 5) === 'click'){
            // 리액션 다는 코드
            let reactionNum = 0;
            const postId = order.replace(/\D/g, ''); // 문자 제거
            const clickReaction = order.replace(/[^a-zA-Z]/g, ''); // 숫자 제거

            if (clickReaction === 'clickSmile') {
                reactionNum = 1;
            } else if (clickReaction === 'clickGood') {
                reactionNum = 2;
            } else if (clickReaction === 'clickSad') {
                reactionNum = 3;
            } else if (clickReaction === 'clickHeart') {
                reactionNum = 4;
            } else if (clickReaction === 'clickWorry') {
                reactionNum = 5;
            } else if (clickReaction === 'clickCheck') {
                reactionNum = 6;
            }

            // post 요청 보내는 부분
            await reaction(navigate, familyCode, familyId, memberId, postId, reactionNum);

            // 전체 게시물 가져오는 api 호출
            findPostInfo();

            // setFeeds다시 한번 호출
            const numberOfPostNumber = post.length;
            setFeeds(numberOfPostNumber)
        }

    }
    return (
        <div>
            <MainHeaderBox>
                <p style={{ backgroundImage: `url(${logo})` }}></p>
                <input
                    id="searchInput"
                    type="text"
                    placeholder="게시물 검색(이름, 제목, 내용)"
                    onChange={onChangeSearchContent}
                />
                <ProfileLink to={`/${familyCode}/${memberId}/true`}>
                    <img id="profileimg"></img>
                </ProfileLink>
            </MainHeaderBox>
            <MainBox style={{border : `2px solid ${color}`}}>
                <div id="feedBox" onClick={handleOnClick}>
                </div>
            </MainBox>
            <ButtonContainer>
                <button id="postingBtn" onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>
    )


}

export default Body;