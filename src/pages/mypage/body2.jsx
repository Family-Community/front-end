import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageContainer, MyPageHeaderBox, ButtonContainer } from "./style"
import { MyPageBox, MainLink } from "./style";
import profile from '../../assets/images/profile.svg';
import photoex from '../../assets/images/photoex.png';
import house from '../../assets/images/house-solid.svg';
const history = useHistory();

// 헤더
function MyPageHeader() {

    // 검색결과 가져오는 함수: 수정 필요
    const getSearchResults = async (searchTerm) => {

        // setSearchResults(updatedResults); // 업데이트된 검색 결과 설정
    };

    return (
        <MyPageHeaderBox>
            <MainLink to="../main">
                <img src={house} />
            </MainLink>
            <h2>${response.data.familyName}의 ${response.data.name}</h2>
        </MyPageHeaderBox>
    )
}

// 게시물 정보 렌더링
function MyPageBody({ post }) {
    const handleMemberClick = (e) => {
        console.log('profile click event');
        history.push('../profile');
    }

    const handleDeleteClick = () => {
        console.log('delete click event');
        // 삭제
    }

    const handleEditClick = () => {
        console.log('edit click event');
        // 수정 
    }

    return (

        <MyPageBox>
            <img src={post.member.image} alt="Member" onClick={handleMemberClick} />
            <p onClick={handleMemberClick}>{post.member.name}</p>
            <p onClick={handleDeleteClick}>삭제</p>
            <p>|</p>
            <p onClick={handleEditClick}>수정</p>
            <img src={post.photo} alt="Post" />
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>😄</p>
            <p>👍</p>
            <p>😥</p>
            <p>💗</p>
            <p>😧</p>
            <p>✔</p>
        </MyPageBox>
    )
}



function Body() {
    const handleEditClick = (e) => {
        console.log('Editing click event');
        history.push('../profileedit');
    }

    return (
        <div>
            <MainHeader />
            {posts.map((post) => (
                <MyPageBody key={post.id} post={post} />
            ))}
            <ButtonContainer>
                <button onClick={handleEditClick} type="submit">내 정보 수정</button>
            </ButtonContainer>
        </div>
    )
}

export default Body;

// function Body() {

//     function MypageHeader() {
//         return (
//             <MyPageHeaderBox>
//                 <MainLink to="../main">
//                     <img src={house} />
//                 </MainLink>
//                 <h2>${response.data.familyName}의 ${response.data.name}</h2>
//             </MyPageHeaderBox>
//         )
//     }
//     return (
//         <div>
//             <MypageHeader />
//             <MyPageBox >
//                 <img src={profile} />
//                 <p>이름</p>
//                 <p>삭제</p>
//                 <p>|</p>
//                 <p>수정</p>
//                 <img src={photoex} />
//                 <p>제목</p>
//                 <p>내용</p>
//                 <p>😄</p>
//                 <p>👍</p>
//                 <p>😥</p>
//                 <p>💗</p>
//                 <p>😧</p>
//                 <p>✔</p>
//             </MyPageBox>
//             <ButtonContainer>
//                 <button type="submit">내 정보 수정</button>
//             </ButtonContainer>
//         </div>

//     )
// }

// export default Body;