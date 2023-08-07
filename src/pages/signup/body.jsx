import { SignupBody } from "./style";
function Body() {

    // 사진 업로드 시 photoBox에 띄워주기
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto);
        
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `90%`;
    }
    // 만들기 버튼 누를 시
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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
                <p>입장 번호 확인 : <input type="password" name="" id="" placeholder="입장번호와 같게요!"/></p>
                <p>내 이름 :  <input type="text" name="" id="" placeholder="이름을 적어주세요!"/></p>
                <div>
                    <p>내 사진 <span>(필수는 아니에요)</span></p> 
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
                   <p>컬러 <span>(가족을 대표하는 색이 될거에요)</span></p>
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