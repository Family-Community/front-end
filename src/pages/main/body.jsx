import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import glasses from '../../assets/images/magnifying-glass-solid.svg';
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import { getMemberInfo } from "../../apis/mainApi/apis";
function Body() {
    // familyCode
    const familyCode = useParams().familyCode;

    // familyId, memberId 가져오기
    let familyId = '';
    let memberId = '';
    const location = useLocation();
    try{
        familyId = location.state.familyId;
        memberId = location.state.memberId;
    }catch(err){
        
    }

    // memberInfo 가져오기
    const navigate = useNavigate();
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const findMemberInfo = async() => {
        // 정상 접근 시
        try{
            const memberInfo = await getMemberInfo(familyId, memberId);
            setColor(memberInfo[0]);
            setImage(memberInfo[1]);
            setName(memberInfo[2]);
        }
        // 비정상 접근 시
        catch(err){
            navigate(`/${familyCode}/profileAuth`);
        }
    }
    findMemberInfo();

    // color, name, image를 갖췄을 때
    if(color && name){
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
                <ProfileLink to="../mypage">
                    <p id="profileImg"></p>
                </ProfileLink>
            </MainHeaderBox>

        )
    }
    // 글쓰기 버튼 누를 시
    const handleOnClickPosting = () => {
        navigate(`/${familyCode}/posting`, {state: {'memberId':memberId, 'familyId':familyId}});
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
                <p>😄</p>
                <p>👍</p>
                <p>😥</p>
                <p>💗</p>
                <p>😧</p>
                <p>✔</p>
            </MainBox>
            <ButtonContainer>
                <button onClick={handleOnClickPosting}>글쓰기</button>
            </ButtonContainer>
        </div>



    )

};


export default Body;