import { ProfileAddBody } from "./style";
import { useState, useEffect } from "react";
import { getFamilyInfo, createMember } from "../../apis/profileAddApi/apis";
import { useParams, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
function Body() {

    // familyCode
    const familyCode = useParams().family_code;

    // fmailyInfo 가져오기
    const [familyId, setfamilyId] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [color, setColor] = useState('');
    const setFamilyInfo = async() => {
        const familyInfo = await getFamilyInfo(familyCode);
        const familyId = familyInfo[0];
        const familyName = familyInfo[1];
        const color = familyInfo[2];
        setfamilyId(familyId);
        setFamilyName(familyName);
        setColor(color);
    }
    setFamilyInfo();

    // form 내의 정보
    const [name, onChangeName, setName] = useInput('');
    const [image, setImage] = useState('');

    // 버튼 활성화
    const [makeBtn, setMakeBtn] = useState('');
    const getMakeBtn = () => {
        const makeBtn = document.getElementById('makeBtn');
        setMakeBtn(makeBtn);
    }
    useEffect(()=> {
        getMakeBtn();
    }, [])
    if(makeBtn && name.length > 0){
        makeBtn.style.color = `#fff`;
    }
    else if(makeBtn){
        makeBtn.style.color = `red`;
    }

    // 컬러 설정
    if (familyId && color){
        const nameInput = document.getElementById('nameInput');
        nameInput.style.border = `2px solid ${color}`;
        const imageGuide = document.getElementById('imageGuide');
        imageGuide.style.color = `${color}`;
        const uploadFileLabel = document.getElementById('uploadFileLabel');
        uploadFileLabel.style.backgroundColor = `${color}`;
        const makeBtn = document.getElementById('makeBtn');
        makeBtn.style.backgroundColor = `${color}`;
    }

    // 만들기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        createMember(navigate, familyId, name, image, familyName, familyCode);
    }

    // 사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto);
        
        // 업로드된 사진 보여주기
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `80%`;
        photoBox.style.border = `none`;

        // 사진 설정
        setImage(selectedPhoto);
    }

    return (
        <ProfileAddBody>
            <form onSubmit={handleOnSubmit}>
                <p>이름 : <input type="text" name="" id="nameInput" placeholder="이름을 적어주세요" onChange={onChangeName}/></p>
                <p id="imageGuide">내 사진 <span>(필수는 아니예요)</span></p>
                <input 
                type="file" 
                name="" 
                id="uploadFile"
                onChange={handleOnChangePhoto} />
                <div id="photoBox"></div>
                <label htmlFor="uploadFile" id="uploadFileLabel">사진 올리기</label>
                <button type="submit" id="makeBtn">만들기</button>
            </form>
        </ProfileAddBody>
    )
}

export default Body;