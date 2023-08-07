import { ProfileAuthBody } from "./style";
function Body() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <ProfileAuthBody>
            <form onSubmit={handleOnSubmit}>
                <p>호동이네 안방</p>
                <p>입장번호를 입력해주세요</p>
                <p><input type="password" name="" id="" placeholder="예) 1234"/></p>
                <button type="submit">입장하기</button>
            </form>
        </ProfileAuthBody>
    )
}

export default Body;