import { SignupBody } from "./style";
import { createFamily } from "../../apis/signupApi/apis";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Body() {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImgae] = useState('');
    // 사진 업로드 시 photoBox에 띄워주기
    const handleOnChangePhoto = (e) => {
        const currImage = e.target.files[0];
        // 이미지 띄워주고
        const currImageUrl = URL.createObjectURL(currImage);
        
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${currImageUrl})`;
        photoBox.style.backgroundSize = `90%`;
        // setting
        setSelectedImgae(currImage);
    }
    // 만들기 버튼 누를 시
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // 가족 이름
        const family_name = e.target[0].value;
        if (!family_name){
            alert('가족 이름을 입력해 주세요!');
        }
        // 입장 번호
        const entry_number = e.target[1].value;
        const entry_number_check = e.target[2].value;
        if (entry_number.length !== 4){
            alert('입장 번호 형식을 맞춰주세요!');
        }
        else if(entry_number !== entry_number_check){
            alert('입장번호와 입장번호 확인이 일치하지 않아요!');
        }
        // 이름
        const name = e.target[3].value;
        if (!name){
            alert('이름을 입력해 주세요!');
        }
        // 컬러
        let color = '';
        for (let i=5; i<=10; i++){
            if (e.target[i].checked){
                color = e.target[i].id;
            }
        }
        createFamily(navigate, family_name, color, entry_number, name, selectedImage);
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
        const selectedColor = e.target.id;
        const selectedColorLabel = document.getElementById(selectedColor);
        selectedColorLabel.style.border = `2px solid #000`;

    }
    return (
        <SignupBody>
            <form onSubmit={handleOnSubmit}>
                <p>가족 이름 : <input type="text" name="" id="" placeholder="예) 호동이네"/></p>
                <p>입장 번호 : <input type="password" name="" id="" placeholder="예) 1234"/></p>
                <p>입장 번호 확인 : <input type="password" name="" id="" placeholder="예) 1234"/></p>
                <p>내 이름 :  <input type="text" name="" id="" placeholder="이름을 적어주세요"/></p>
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
                <button type="submit">가족 만들기</button>
            </form>
        </SignupBody>
    )
}

export default Body;