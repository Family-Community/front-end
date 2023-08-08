import { EditHeaderBox, EditBox } from "./style";

function Body() {
    //헤더
    function EditHeader() {
        return (
            <EditHeaderBox>
                <h2>지민이네의 박지민</h2>
            </EditHeaderBox>
        )
    }

    //바꾸기 버튼 누를 시
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('바꾸기');
    }

    //사진 업로드 시
    const handleOnChangePhoto = (e) => {
        const selectedPhoto = e.target.files[0];
        const selectedPhotoUrl = URL.createObjectURL(selectedPhoto)

        const photoBox = document.getElementById(`photoBox`);
        photoBox.style.backgroundImage = `url(${selectedPhotoUrl})`;
        photoBox.style.backgroundSize = `90%`;
    }


    return (
        <div>
            <EditHeader />
            <EditBox>
                <form onSubmit={handleOnSubmit}>
                    <p>내 이름 : <input type="text" name="" id="" value="" /></p>
                    <p>내 사진 <span>(필수는 아니에요)</span></p>
                    <input
                        type="file"
                        name=""
                        id="uploadFile"
                        onChange={handleOnChangePhoto}
                        value="" />
                    <div id="photoBox"></div>
                    <label htmlFor="uploadFile">사진 올리기</label>
                    <button type="submit" all="unset">바꾸기</button>
                </form>
                <button type="submit" all="unset">가족 삭제</button>
            </EditBox>
        </div>
    )
}

export default Body;