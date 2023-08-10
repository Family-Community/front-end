import { SignupBody } from "./style";
import { createFamily } from "../../apis/signupApi/apis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useInput from "../../hooks/useInput";
function Body() {

    // form 내의 변수들
    const [familyName, onChangeFamilyName, setFamilyName] = useInput('');
    const [entryNumber, onChangeEntryNumber, setEntryNumber] = useInput('');
    const [entryNumberCheck, onChangeEntryNumberCheck, setEntryNumberCheck] = useInput('');
    const [name, onChangeName, setName] = useInput('');
    const [selectedImage, setSelectedImgae] = useState('');
    const [color, setColor] = useState('');

    // 사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const currImage = e.target.files[0];
        // 이미지 띄워주기
        const currImageUrl = URL.createObjectURL(currImage);
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${currImageUrl})`;
        photoBox.style.backgroundSize = `90%`;
        photoBox.style.border = `none`;

        // selectedImage 바꿔주기
        setSelectedImgae(currImage);
    }

    // 컬러 선택 시
    const handleOnClickColor = (e) => {
 
        // 모든 lable 초기화
        const colorLabelList = ["#3CAEFFLabel", "#6DD66DLabel", "#FFBCB9Label", "#FFD732Label", "#D873F1Label", "#aaaaaaLabel"];
        colorLabelList.forEach((colorLabel) => {
            const currColorLabel = document.getElementById(colorLabel);
            currColorLabel.style.border = `none`;
        })

        // 선택된 컬러만 표시
        const selectedColorLabelId = e.target.id;
        const selectedColorLabel = document.getElementById(selectedColorLabelId);
        selectedColorLabel.style.border = `2px solid #000`;
        
        // selectedColor 설정
        const selectedColor = e.target.htmlFor;
        setColor(selectedColor);
    }

    // 만들기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!familyName){
            alert('가족 이름을 설정해 주세요');
        }
        else if(!entryNumber || entryNumber.length > 4){
            alert('네 자리 이하의 입장 번호를 설정해 주세요');
        }
        else if(entryNumber !== entryNumberCheck){
            alert('입장 번호와 입장 번호 확인이 일치하지 않아요');
        }
        else if(!name){
            alert('내 이름을 입력해 주세요');
        }
        else if(!color){
            alert('컬러를 설정해 주세요');
        }
        else{
            createFamily(navigate, familyName, color, entryNumber, name, selectedImage);
        }
    }

    // 버튼 활성화 구현
    if(familyName && entryNumber && entryNumberCheck && name && color){
        const makeBtn = document.getElementById('makeBtn');
        makeBtn.style.color = `#fff`;
    }
    else if ((familyName || entryNumber || entryNumberCheck || name || color) || (familyName && entryNumber && entryNumberCheck&& name && color)){
        const makeBtn = document.getElementById('makeBtn');
        makeBtn.style.color = `red`;
    }
    return (
        <SignupBody>
            <form onSubmit={handleOnSubmit}>
                <p>가족 이름 : <input type="text" name="" id="" placeholder="예) 호동이네" onChange={onChangeFamilyName}/></p>
                <p>입장 번호 : <input type="password" name="" id="" placeholder="* 네 자리 이하 *" onChange={onChangeEntryNumber}/></p>
                <p>입장 번호 확인 : <input type="password" name="" id="" placeholder="예) 1234" onChange={onChangeEntryNumberCheck}/></p>
                <p>내 이름 :  <input type="text" name="" id="" placeholder="이름을 적어주세요"  onChange={onChangeName}/></p>
                <div>
                    <p>내 사진 <span>(필수는 아니예요)</span></p> 
                    <input 
                    id="uploadFile" 
                    type="file" 
                    src="" 
                    alt=""
                    onChange={handleOnChangePhoto} />
                    <label htmlFor="uploadFile">사진올리기 <span>(클릭)</span></label>
                    <div id="photoBox"></div>
                </div>
                <div>
                   <p>컬러 <span>(가족을 대표하는 색이 될거예요)</span></p>
                   <div>
                        <div>
                            <input type="radio" name="color" id="#3CAEFF" />
                            <label id="#3CAEFFLabel" htmlFor="#3CAEFF" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#6DD66D" />
                            <label id="#6DD66DLabel" htmlFor="#6DD66D" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#FFBCB9" />
                            <label id="#FFBCB9Label" htmlFor="#FFBCB9" onClick={handleOnClickColor}></label>
                        </div>
                        <div>
                            <input type="radio" name="color" id="#FFD732" />
                            <label id="#FFD732Label" htmlFor="#FFD732" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#D873F1" />
                            <label id="#D873F1Label" htmlFor="#D873F1" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#aaaaaa" />
                            <label id="#aaaaaaLabel" htmlFor="#aaaaaa" onClick={handleOnClickColor}></label>
                        </div>
                   </div>
                </div>
                <button type="submit" id="makeBtn">안방 만들기</button>
            </form>
        </SignupBody>
    )
}

export default Body;