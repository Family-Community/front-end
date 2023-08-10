import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageContainer, MainHeaderBox, ButtonContainer, ProfileLink } from "./style"
import { MainBox } from "./style"
import glasses from '../../assets/images/magnifying-glass-solid.svg';
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';

function Body() {
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
                    <img src={profile} alt="Profile" />
                </ProfileLink>
            </MainHeaderBox>

        )
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
                <button type="submit">글쓰기</button>
            </ButtonContainer>
        </div>



    )

};


export default Body;