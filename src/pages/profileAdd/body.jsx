import { ProfileAddBody } from "./style";
function Body() {

    // 만들기 버튼 누를 시
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('만들기');
    }

    // 사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto);
        
        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `90%`;
    }

    return (
        <ProfileAddBody>
            <form onSubmit={handleOnSubmit}>
                <p>이름 : <input type="text" name="" id="" /></p>
                <p>내 사진 <span>(필수는 아니에요)</span></p>
                <input 
                type="file" 
                name="" 
                id="uploadFile"
                onChange={handleOnChangePhoto} />
                <div id="photoBox"></div>
                <label htmlFor="uploadFile">사진 올리기</label>
                <button type="submit">만들기</button>
            </form>
        </ProfileAddBody>
    )
}

export default Body;