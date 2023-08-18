import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import logo from "../../assets/images/logo.png";
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import { getMemberInfo, getPostInfo, getSearchInfo, reaction, deletePost } from "../../apis/mainApi/apis";
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

    const loadMemberInfoAndProfileImage = async () => {
        try {
            const memberInfo = await getMemberInfo(familyId, memberId);
            setColor(memberInfo[0]);
            setImage(memberInfo[1]);
            setName(memberInfo[2]);
            
            // if (memberInfo[1]==null){
            //     setProfileImage(profile)
            // }
            // 이미지 로딩 후에 프로필 이미지 설정
            setProfileImage(memberInfo[1]);
            
        } catch (err) {
            console.log(err);
        }
    };
    
    const setProfileImage = (imageUrl) => {
        if (imageUrl==null){
            const profileimg = document.getElementById('profileimg');
            profileimg.style.backgroundImage = `url(${profile})`
        }
        else {
            const profileimg = document.getElementById('profileimg');
            profileimg.style.backgroundImage = `url(${imageUrl})`;
        }
    };
    
    useEffect(() => {
        loadMemberInfoAndProfileImage();
    }, []);


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
            navigate(`/${familyCode}/profileAuth`);
            // console.log(err);
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
                for (let i=numberOfPostNumber - 1; i >= 0; i--) {
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
                        <p id="name">${name}</p>
                        <p id="delete${postMemberId}">삭제</p> 
                        <p>|</p>
                        <p id="edit${postMemberId}">수정</p> 
                        <img src=${photo} /> 
                        <p>${title}</p>
                        <p>${content}</p>
                        <div id="reactionBox">
                            <div>
                                <p id="clickSmile${postId}">😄</p>
                                <p id="clickGood${postId}">👍</p>
                                <p id="clickSad${postId}">😥</p>
                                <p id="clickHeart${postId}">💗</p>
                                <p id="clickWorry${postId}">😧</p>
                                <p id="clickCheck${postId}">✔</p>
                            </div>
                            <div>
                                <p id="clickSmileCnt">${smileCnt}</p>
                                <p id="clickGoodCnt">${goodCnt}</p>
                                <p id="clickSadCnt">${sadCnt}</p>
                                <p id="clickHeartCnt">${heartCnt}</p>
                                <p id="clickWorryCnt">${worryCnt}</p>
                                <p id="clickCheckCnt">${checkCnt}</p>
                            </div>
                        </div>    
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
        // 검색어 한 번에 삭제하는 버튼 등장
        
    }

    // feedBox 클릭 시
    const handleOnClick = async (e) => {
        e.preventDefault();
        // order -> 다음 동작의 명령
        const order = e.target.id;

        // 수정 버튼 누를 시
        if (order.slice(0,4) === 'edit') {
            // postId 따기
            const currPostId = e.target.parentNode.id;
            const postMemberId = order.slice(4);
            // 본인이 맞으면
            if(memberId === postMemberId){
                // 수정 페이지로
                navigate(`/${familyCode}/${memberId}/${currPostId}/update`);
            }
            else{
                alert('본인의 게시물이 아니면 수정할 수 없어요');
            }
            
            return;
        }

        // 삭제 버튼 누를 시
        else if (order.slice(0,6) == 'delete') {
            const postMemberId = order.slice(6)
            // 작성자=유저라면
            if (postMemberId === memberId){
                const check = window.confirm('정말 삭제하시겠습니까?');
                if(check){
                    const postId = e.target.parentNode.id;
                    deletePost(navigate, familyId, memberId, postId, familyCode);
                }
            }
            else{
                alert('본인의 게시물이 아니면 삭제할 수 없어요');
            }
        }

        // 프로필 사진을 선택했다면 (게시글의)
        else if (order.slice(0, 8) === 'toMyPage') {
            const postMemberId = order.slice(9);
            // 누른 사람과 프로필 사진의 사람이 같으면
            if (postMemberId === memberId) {
                navigate(`/${familyCode}/${postMemberId}/${memberId}/true`);
            }
            else {
                navigate(`/${familyCode}/${postMemberId}/${memberId}/false`);
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
                <ProfileLink to={`/${familyCode}/${memberId}/${memberId}/true`}>
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
