import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import glasses from '../../assets/images/magnifying-glass-solid.svg';
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import { getMemberInfo, getPostInfo } from "../../apis/mainApi/apis";
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

    // post 가져오기
    const [post, setPost] = useState('');
    const findPostInfo = async () => {
        //정상 접근 시
        try {
            const postInfo = await getPostInfo(familyId);
            setPost(postInfo);
            // post가 업데이트된 이후에 setFeeds 호출
            setFeeds(postInfo.length);
            console.log(postInfo[0]);
        } catch (err) {
            //비정상 접근 시
            navigate(`/${familyCode}/profileAuth`);
        }
    }

    //post 띄우기
    const setFeeds = (numberOfPostNumber) => {
        // console.log("post state:", post);
        const feedBox = document.getElementById('feedBox');
        if (feedBox) {
            // 초기화
            feedBox.innerHTML = '';
            for (let i = 0; i < numberOfPostNumber; i++) {
                //이전까지의 피드
                const prev = feedBox.innerHTML;

                // 새로 추가될 피드
                const postId = post[i].id;
                let image = post[i].member.image;
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

                //반응

                // 게시물 렌더링
                feedBox.innerHTML = prev + `
                <div>
                    <img id="memberProfile" />
                    <p>${name}</p>
                    <p>삭제</p> 
                    <p>|</p> 
                    <p>수정</p> 
                    <img src=${photo} /> 
                    <p>${title}</p>
                    <p>${content}</p>
                    <p>😄</p>
                    <p>${smileCnt}</p>
                    <p>👍</p>
                    <p>${goodCnt}</p>
                    <p>😥</p>
                    <p>${sadCnt}</p>
                    <p>💗</p>
                    <p>${heartCnt}</p>
                    <p>😧</p>
                    <p>${worryCnt}</p>
                    <p>✔</p>
                    <p>${checkCnt}</p>    
                </div>
            `
            }

        }

    }
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
        // //feedBox 찾기
        // const feedBox = document.getElementById('feedBox');
        // if (feedBox) {
        //     const numberOfPostNumber = post.length;
        //     setFeeds(numberOfPostNumber);
        //     console.log()
        // }
    }, []);
    return (
        <div>
            <MainHeader />
            <MainBox>
                <div id="feedBox">
                    {/* <p id="memberProfile"></p>
                    <p>이름</p>
                    <p>삭제</p>
                    <p>|</p>
                    <p>수정</p>
                    <img src={photoex} />
                    <p>제목</p>
                    <p>내용</p>
                    <p>😄</p>
                    <p>👍</p>
                    <p>😥</p>
                    <p>💗</p>
                    <p>😧</p>
                    <p>✔</p> */}
                </div>

            </MainBox>
            <ButtonContainer>
                <button onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>



    )

};


export default Body;