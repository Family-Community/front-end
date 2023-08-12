import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { ImageContainer, MyPageHeaderBox, ButtonContainer } from "./style"
import { MyPageBox, MainLink } from "./style";
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import house from '../../assets/images/house-solid.svg';
import { useNavigate, useParams } from "react-router-dom";

function Body() {

    // familyCode, memberId 가져오기
    const familyCode = useParams().familyCode;
    const memberId = useParams().memberId;

    // 프로필 수정 버튼 눌렀을 때
    const navigate = useNavigate();
    const handleOnClickProfileEdit = () => {
        navigate(`/${familyCode}/${memberId}/profileEdit`);
    }

    function MypageHeader() {
        return (
            <MyPageHeaderBox>
                <MainLink to="../main">
                    <img src={house}/>
                </MainLink>
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
            </MyPageBox>
            <ButtonContainer>
                <button type="submit" onClick={handleOnClickProfileEdit}>내 정보 수정</button>
            </ButtonContainer>
        </div>

    )
}

export default Body;