// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import { SearchContainer, StyledInput, MainHeaderBox, ButtonContainer, ProfileLink, MainBox } from "./style2";
// import glasses from '../../assets/images/magnifying-glass-solid.svg';
// import profile from '../../assets/images/profile.svg';
// import photoex from '../../assets/images/photoex.png';

// function Body() {
//     // 검색 기능
//     function Search({ onSearch }) {
//         const [searchTerm, setSearchTerm] = useState('');

//         const handleSearchChange = (e) => {
//             const { value } = e.target;
//             setSearchTerm(value);
//             // 검색 결과 가져오는 함수 호출
//             onSearch(value);
//         }

//         return (
//             <SearchContainer>
//                 <StyledInput
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     placeholder="게시물 검색"
//                 />
//             </SearchContainer>
//         );
//     }
//     // 헤더
//     function MainHeader() {

//         const handleOnClick = (e) => {
//             console.log('logo click event');
//             navigate('/');
//         }

//         // 검색결과 가져오는 함수: 수정 필요
//         const getSearchResults = async (searchTerm) => {

//             // setSearchResults(updatedResults); // 업데이트된 검색 결과 설정
//         };

//         return (
//             <MainHeaderBox>
//                 <p onClick={handleOnClick}></p>
//                 <Search onSearch={getSearchResults} />
//                 <img src={glasses} alt="Glasses" />
//                 <ProfileLink to="../mypage">
//                     <img src={profile} alt="Profile" />
//                 </ProfileLink>
//             </MainHeaderBox>
//         )
//     }

//     // 게시물 정보 렌더링
//     function MainBody({ post }) {
//         const handleMemberClick = (e) => {
//             console.log('profile click event');
//             navigate(`../profile`);
//         }

//         const handleDeleteClick = () => {
//             console.log('delete click event');
//             // 삭제
//         }

//         const handleEditClick = () => {
//             console.log('edit click event');
//             // 수정 
//         }

//         return (

//             <MainBox>
//                 <img src={response.data.image} alt="Member" onClick={handleMemberClick} />
//                 <p onClick={handleMemberClick}>{post.member.name}</p>
//                 <p onClick={handleDeleteClick}>삭제</p>
//                 <p>|</p>
//                 <p onClick={handleEditClick}>수정</p>
//                 <img src={post.photo} alt="Post" />
//                 <p>{post.title}</p>
//                 <p>{post.content}</p>
//                 <p>😄</p>
//                 <p>👍</p>
//                 <p>😥</p>
//                 <p>💗</p>
//                 <p>😧</p>
//                 <p>✔</p>
//             </MainBox>
//         )
//     }


//     // familyCode
//     const familyCode = useParams().familyCode;

//     // familyId, memberId 가져오기
//     let familyId = '';
//     let memberId = '';
//     const location = useLocation();
//     try {
//         familyId = location.state.familyId;
//         memberId = location.state.memberId;
//     } catch (err) {

//     }

//     // memberInfo 가져오기
//     const navigate = useNavigate();
//     const [color, setColor] = useState('');
//     const [image, setImage] = useState('');
//     const [name, setName] = useState('');
//     const findMemberInfo = async () => {
//         // 정상 접근 시
//         try {
//             const memberInfo = await getMemberInfo(familyId, memberId);
//             setColor(memberInfo[0]);
//             setImage(memberInfo[1]);
//             setName(memberInfo[2]);
//         }
//         // 비정상 접근 시
//         catch (err) {
//             navigate(`/${familyCode}/profileAuth`);
//         }
//     }
//     findMemberInfo();

//     // color, name, image를 갖췄을 때
//     if (color && name) {
//         const profileImg = document.getElementById("profileImg");
//         profileImg.style.backgroundImage = `url(${image})`;
//     }

//     // 글쓰기 버튼 누를 시
//     const handleOnClickPosting = () => {
//         navigate(`/${familyCode}/posting`, {state: {'memberId':memberId, 'familyId':familyId}});
//     }

//     return (
//         <div>
//             <MainHeader />
//             {posts.map((post) => (
//                 <MainBody key={post.id} post={post} />
//             ))}
//             <ButtonContainer>
//                 <button onClick={handleOnClickPosting} type="submit">글쓰기</button>
//             </ButtonContainer>
//         </div>
//     )
// }

// export default Body;