import { ProfileAuthBody } from "./style";
import { getFamilyId, checkEntryNumber } from "../../apis/profileAuthApi/apis";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
function Body() {

    // familyId 가져오기
    const [familyId, setFamilyId] = useState('');
    const familyCode = useParams('familyCode').family_code;
    const findFamilyId = async() => {
        const currFamilyId = await getFamilyId(familyCode);
        setFamilyId(currFamilyId);
    }
    findFamilyId();

    // 입장하기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const entryNumber = e.target[0].value;
        checkEntryNumber(navigate, familyId, entryNumber, familyCode);
    }

    return (
        <ProfileAuthBody>
            <form onSubmit={handleOnSubmit}>
                <p>호동이네 안방</p>
                <p>입장번호를 입력해주세요</p>
                <p><input type="password" name="" id="" placeholder="* 네 자리 이하 *"/></p>
                <button type="submit">입장하기</button>
            </form>
        </ProfileAuthBody>
    )
}

export default Body;