import { SignupBody } from "./style";
function Body() {

    // 만들기 버튼 누를 시
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // 컬러 선택 시
    const handleOnClickColor = (e) => {
        console.log(e);
    }
    return (
        <SignupBody>
            <form onSubmit={handleOnSubmit}>
                <p>가족 이름 : <input type="text" name="" id="" /></p>
                <p>입장 번호 : <input type="password" name="" id="" /></p>
                <p>입장 번호 확인 : <input type="password" name="" id="" /></p>
                <p>내 이름 :  <input type="text" name="" id="" /></p>
                <div>
                    <p>내 사진 <span>(필수는 아니에요)</span></p> 
                    <input 
                    id="uploadFile" 
                    type="file" 
                    src="" 
                    alt="" />
                    <label htmlFor="uploadFile">사진올리기 <span>(클릭)</span></label>
                    <div></div>
                </div>
                <div>
                   <p>컬러 <span>(가족을 대표하는 색이 될거에요)</span></p>
                   <div>
                        <div>
                            <input type="radio" name="color" id="#3CAEFF" />
                            <label htmlFor="#3CAEFF" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#6DD66D" />
                            <label htmlFor="#6DD66D" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#FFBCB9" />
                            <label htmlFor="#FFBCB9" onClick={handleOnClickColor}></label>
                        </div>
                        <div>
                            <input type="radio" name="color" id="#FFD732" />
                            <label htmlFor="#FFD732" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#D873F1" />
                            <label htmlFor="#D873F1" onClick={handleOnClickColor}></label>
                            <input type="radio" name="color" id="#aaaaaa" />
                            <label htmlFor="#aaaaaa" onClick={handleOnClickColor}></label>
                        </div>
                   </div>
                </div>
                <button type="submit">가족 만들기</button>
            </form>
        </SignupBody>
    )
}

export default Body;