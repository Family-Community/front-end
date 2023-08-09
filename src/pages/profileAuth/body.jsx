import { ProfileAuthBody } from "./style";
import { getFamilyId, checkEntryNumber } from "../../apis/profileAuthApi/apis";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
function Body() {
    // from 내의 데이터들
    const [entryNumber, onChangeEntryNumber, setEntryNumber] = useInput('');
    
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
        checkEntryNumber(navigate, familyId, entryNumber, familyCode);
    }

    // 버튼 활성화 구현
    const [ entryBtn, setEntryBtn ] = useState('');
    const getEntryBtn = () => {
        const entryBtn = document.getElementById('entryBtn');
        setEntryBtn(entryBtn);
    }
    useEffect(()=> {
        getEntryBtn();
    }, [])
    if(entryBtn && entryNumber.length > 0){
        entryBtn.style.color = `#fff`;
    }
    else if(entryBtn){
        entryBtn.style.color = `red`;
    }

    return (
        <ProfileAuthBody>
            <form onSubmit={handleOnSubmit}>
                <p>호동이네 안방</p>
                <p>입장번호를 입력해주세요</p>
                <p><input type="password" name="" id="" placeholder="* 네 자리 이하 *" onChange={(onChangeEntryNumber)}/></p>
                <button type="submit" id="entryBtn">입장하기</button>
            </form>
        </ProfileAuthBody>
    )
}

export default Body;