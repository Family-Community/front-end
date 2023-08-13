import { ProfileEditBody } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { useEffect, useState } from "react";
import { getMemberInfo, getFamilyInfo, changeMemberInfo, deleteFamily } from "../../apis/profileEditApi/apis";
import profile from "../../assets/images/profile.svg";

function Body() {

    // familyCode, memberId 가져오기
    const familyCode = useParams().familyCode;
    const memberId = useParams().memberId;

    // familyId, name, image, color, familyName, prevPhoto 가져오기
    const [familyId, setFamilyId] = useState('');
    const [name, setName] = useState(''); 
    const [image, setImage] = useState(''); 
    const [color, setColor] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [prevPhoto, setPrevPhoto] = useState('');
    const findFamilyInfo = async() => {
        const familyInfo = await getFamilyInfo(familyCode);
        const familyId = familyInfo[0];
        const color = familyInfo[1];
        const familyName = familyInfo[2];
        setFamilyId(familyId);
        setColor(color);
        setFamilyName(familyName);
    }
    findFamilyInfo();
    const findMemberInfo = async() => {
        const memberInfo = await getMemberInfo(familyId, memberId);
        const name = memberInfo[0];
        const prevPhoto = memberInfo[1];
        setName(name);
        setPrevPhoto(prevPhoto);
    }
    if(familyId && color && familyName){
        findMemberInfo();
    }
    
    // 컬러 및 이름, 사진 적용
    if(color && name && familyName){

        const newNameInput = document.getElementById('newNameInput');
        newNameInput.style.border = `2px solid ${color}`;

        const prevPhotoBox = document.getElementById('prevPhotoBox');
        if (prevPhoto){
            prevPhotoBox.style.backgroundImage = `url(${prevPhoto})`;
        }
        else{
            prevPhotoBox.style.backgroundImage = `url(${profile})`;
        }
        prevPhotoBox.style.border = `2px solid ${color}`;

        const familyNameSpan = document.getElementById('familyNameSpan');
        familyNameSpan.innerText = `${familyName} `;
        familyNameSpan.style.color = `${color}`;

        const nameSpan = document.getElementById('nameSpan');
        nameSpan.innerText = `${name}`;
        nameSpan.style.color = `${color}`;

        const newPhotoGuide = document.getElementById('newPhotoGuide');
        newPhotoGuide.style.color = `${color}`;

        const uploadFileLabel = document.getElementById('uploadFileLabel');
        uploadFileLabel.style.backgroundColor= `${color}`;

        const changeBtn = document.getElementById('changeBtn');
        changeBtn.style.backgroundColor = `${color}`;
    }
    // form 내의 데이터들
    const [newName, onChangeNewName, setNewName] = useInput('');
    const [newPhoto, setNewPhoto] = useState('');

    //바꾸기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!newName){
            alert('이름을 입력해주세요');
        }
        else if(newName.length > 10){
            alert('10자 이내의 이름으로 설정해 주세요');
        }
        else{
            changeMemberInfo(navigate, familyCode, memberId, newName, newPhoto);
        }
    }

    //사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];

        // 사진 띄워주기
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto);
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `100%`;
        photoBox.style.border = `none`;
        photoBox.style.borderRadius = `5px`;

        // setNewPhoto
        setNewPhoto(selectedPhoto);
    }

    // 버튼 활성화 구현
    const [changeBtn, setChangeBtn] = useState('');
    const getChangeBtn = () => {
        const changeBtn = document.getElementById('changeBtn');
        setChangeBtn(changeBtn);
    }
    useEffect(() => {
        getChangeBtn();
    }, [])
    if(changeBtn){
        if(newName.length > 1){
            changeBtn.style.color = `#fff`;
        }
        else{
            changeBtn.style.color = `red`;
        }
    }

    // 가족 삭제 구현
    const handleOnClickDeleteFamily = () => {
        const finalCheck = prompt(`가족을 삭제하면 복구가 불가능해요 그럼에도 삭제하시겠다면 '${familyName}'을/를 적어주세요`);
        if(finalCheck === familyName){
            deleteFamily(navigate, familyId, familyName);
        }
        else{
            alert('가족 삭제를 취소하셨습니다');
        }
    }

    return (
        <ProfileEditBody>
            <div>
                <p>
                    <span id="familyNameSpan"></span>안방의 <span id="nameSpan"></span>님
                </p>
                <p id="prevPhotoBox"></p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <p>새 이름 : <input type="text" name="" id="newNameInput" placeholder="이름을 적어주세요" onChange={onChangeNewName}/></p>
                <p id="newPhotoGuide">새 사진 <span>(필수는 아니에요)</span></p>
                <input
                    type="file"
                    name=""
                    id="uploadFile"
                    onChange={handleOnChangePhoto}
                />
                <div id="photoBox"></div>
                <label htmlFor="uploadFile" id="uploadFileLabel">사진 올리기</label>
                <button type="submit" id="changeBtn">바꾸기</button>
            </form>
            <p onClick={handleOnClickDeleteFamily}>가족 삭제</p>
        </ProfileEditBody>
    )
}

export default Body;