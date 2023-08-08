import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { ImageContainer, MyPageHeaderBox, ButtonContainer } from "./style"
import { MyPageBox } from "./style";
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';

function Body() {

    function MypageHeader() {
        return (
            <MyPageHeaderBox>
                <h2>지민이네의 박지민</h2>
            </MyPageHeaderBox>
        )
    }
    return (
        <div>
            <MypageHeader />
            <MyPageBox >
                <img src={profile} />
                <p>이름</p>
                <p>삭제</p>
                <p>수정</p>
                <ImageContainer>
                    <img src={photoex} />
                </ImageContainer>
                <p>제목</p>
                <p>내용</p>
                <p>😄</p>
                <p>👍</p>
                <p>😥</p>
                <p>💗</p>
                <p>😧</p>
                <p>✔</p>
            </MyPageBox>
            <ButtonContainer>
                <button type="submit">내 정보 수정</button>
            </ButtonContainer>
        </div>

    )
}

export default Body;