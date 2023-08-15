import { PostBody } from "./style";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import { getFamilyInfo, postingUpdate } from "../../apis/postingUpdateApi/apis";
function Body() {
    
    // familyCode, memberId, postId 가져오기
    const familyCode = useParams().familyCode;
    const memberId = useParams().memberId;
    const postId = useParams().postId;

    // familyInfo 가져오기
    const [familyId, setFamilyId] = useState('');
    const [color, setColor] = useState('');
    const findFamilyInfo = async() => {
        const familyInfo = await getFamilyInfo(familyCode);
        const familyId = familyInfo[0];
        const color = familyInfo[2];
        setFamilyId(familyId);
        setColor(color);
    }
    findFamilyInfo();

    // postInfo 가져오기
    

    // 컬러 반영
    if(familyId && color){
        const titleInput = document.getElementById('titleInput');
        titleInput.style.border = `2px solid ${color}`;
        const uploadFileLabel = document.getElementById('uploadFileLabel');
        uploadFileLabel.style.backgroundColor = `${color}`;
        const photoBox = document.getElementById('photoBox');
        photoBox.style.border = `2px solid ${color}`;
        const textarea = document.getElementById('textarea');
        textarea.style.border = `2px solid ${color}`;
        const completeBtn = document.getElementById('completeBtn');
        completeBtn.style.backgroundColor = `${color}`;
    }

    // from 내의 정보
    const [title, onChangeTitle, setTitle] = useInput('');
    const [content, onChangeContent, setContent] = useInput('');
    const [photo, setPhoto] = useState('');

    // 사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto);

        // 이미지 띄워주기
        const photoBox = document.getElementById('photoBox');
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `contain`;
        photoBox.style.border = `none`;

        // setPhoto
        setPhoto(selectedPhoto);
    }

    // 작성완료 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!title){
            alert('제목을 작성해주세요');
        }
        else if(!photo){
            alert('사진을 등록해주세요');
        }
        else{
            postingUpdate(navigate, familyCode, familyId, memberId, title, content, photo);
        }
    }
    
    // 버튼 활성화
    if (title && photo){
        const completeBtn = document.getElementById('completeBtn');
        completeBtn.style.color = `#fff`;
    }
    else if((title || photo) && !(title && photo)){
        const completeBtn = document.getElementById('completeBtn');
        completeBtn.style.color = `red`;
    }

    // 현재 자수 보여주기
    const [currLengthSpan, setCurrLengthSpan] = useState('');
    const getCurrLengthSpan = () => {
        const currLengthSpan = document.getElementById('currLengthSpan');
        setCurrLengthSpan(currLengthSpan);
    }
    useEffect(()=>{
        getCurrLengthSpan();
    }, [])
    if(currLengthSpan){
        const currLength = content.length;
        currLengthSpan.innerText = `(${currLength}자)`;
        if(currLength > 80){
            currLengthSpan.style.color = `red`;
        }
        else{
            currLengthSpan.style.color = '#000';
        }
    }

    return (
        <PostBody>
            <form onSubmit={handleOnSubmit}>
                <p>제목 : <input type="text" name="" id="titleInput" placeholder="* 최대 20자 *" onChange={onChangeTitle}/></p>
                <input type="file" name="" id="uploadFile" onChange={handleOnChangePhoto}/>
                <label htmlFor="uploadFile" id="uploadFileLabel">사진 업로드 <span>(클릭)</span></label>
                <div id="photoBox"></div>
                <p>설명 <span id="currLengthSpan">(0자)</span></p>
                <textarea name="" id="textarea" placeholder="* 최대 80자 (필수는 아니예요) *" onChange={onChangeContent}></textarea>
                <button type="submit" id="completeBtn">수정하기</button>
            </form>
        </PostBody>
    )
}

export default Body;