import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import glasses from '../../assets/images/magnifying-glass-solid.svg';
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import { getMemberInfo, getPost, updateReaction } from "../../apis/mainApi/apis";
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
            navigate(`/${familyCode}/profileAuth`);
        }
    }
    findMemberInfo();

    // color, name, image를 갖췄을 때
    if (color && name) {
        const profileImg = document.getElementById("profileImg");
        profileImg.style.backgroundImage = `url(${image})`;
    }


    // //postInfo
    // for (let i = 0; i < numberOfPost; i++) {
    //     let postId = '';
    //     try {
    //         postId = post[i].id;
    //     }
    //     catch (err) {

    //     }
    // }


    // post 가져오기
    const [post, setPost] = useState('');
    const findPost = async () => {
        //정상 접근 시
        try {
            const Post = await getPost();
            setPost(Post);
        }
        //비정상 접근시
        catch (e) {

        }
    }

    // 게시물 띄우기
    const SetFeeds = (post) => {
        const feedBox = document.getElementById('feedBox');
        // 초기화
        feedBox.innerHTML = '';
        const numberOfPost = post.length;

        


        const handleReactionClick = async (postId, reactionType) => {
            try {
                const updatedReactionData = await updateReaction(postId, reactionType);

                // 업데이트된 데이터로 post 업데이트
                setPost(prevPosts => prevPosts.map(postItem => {
                    if (postItem.id === postId) {
                        return {
                            ...postItem,
                            [`${reactionType}_cnt`]: updatedReactionData[`${reactionType}_cnt`]
                        };
                    }
                    return postItem;
                }));
            } catch (error) {
                console.error('Error updating reaction:', error);
            }
        };

        const renderReactions = () => {
            return post.map(postItem => (
                <div key={postItem.id}>
                    <button onClick={() => handleReactionClick(postItem.id, 'smile')}>
                        😄 {postItem.smile_cnt}
                    </button>
                    <button onClick={() => handleReactionClick(postItem.id, 'good')}>
                        👍 {postItem.good_cnt}
                    </button>
                    <button onClick={() => handleReactionClick(postItem.id, 'sad')}>
                        😥 {postItem.sad_cnt}
                    </button>
                    <button onClick={() => handleReactionClick(postItem.id, 'heart')}>
                        💗 {postItem.heart_cnt}
                    </button>
                    <button onClick={() => handleReactionClick(postItem.id, 'worry')}>
                        😧 {postItem.worry_cnt}
                    </button>
                    <button onClick={() => handleReactionClick(postItem.id, 'check')}>
                        ✔ {postItem.check_cnt}
                    </button>
                </div>
            ));
        };



    }
    if (post) {
        const numberOfPost = post.length;
        SetFeeds(numberOfPost, post)
    }




    //헤더
    function MainHeader() {
        const handleOnClick = (e) => {
            console.log('logo click event');
        }
        // // 검색 기능
        // const Search = () => {

        //     return (
        //             <input
        //                 type="text"
        //                 placeholder="제목,작성자,내용 검색하기"
        //             />

        //     );

        // };

        // //프로필
        // const Profile = () => {
        //     return(
        //         <Link to="../mypage">
        //             <img src={profile} />
        //         </Link>
        //     )
        // }

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
    // 글쓰기 버튼 누를 시
    const handleOnClickPosting = () => {
        navigate(`/${familyCode}/posting`, { state: { 'memberId': memberId, 'familyId': familyId } });
    }
    return (
        <div>
            <MainHeader />
            <MainBox>
                <img src={profile} />
                <p>이름</p>
                <p>삭제</p>
                <p>|</p>
                <p>수정</p>
                <img src={photoex} />
                <p>제목</p>
                <p>내용</p>
                {/* <p>😄</p>
                <p>👍</p>
                <p>😥</p>
                <p>💗</p>
                <p>😧</p>
                <p>✔</p> */}
                {renderReactions()}
            </MainBox>
            <ButtonContainer>
                <button onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>



    )



};
export default Body;