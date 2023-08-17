import { ProfileAuthBody } from "./style";
import { getFamilyInfo, checkEntryNumber } from "../../apis/profileAuthApi/apis";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
function Body() {
    // from 내의 데이터들
    const [entryNumber, onChangeEntryNumber, setEntryNumber] = useInput('');
    
    // familyInfo 가져오기
    const [familyId, setFamilyId] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [color, setColor] = useState('');
    const familyCode = useParams().familyCode;
    const findFamilyInfo = async() => {
        const familyInfo = await getFamilyInfo(familyCode);
        const familyId = familyInfo[0];
        const familyName = familyInfo[1];
        const color = familyInfo[2];
        setFamilyId(familyId);
        setFamilyName(familyName);
        setColor(color);
    }
    findFamilyInfo();
    
    // fmilyNameBox, entryBtn, entryNumberInput 변경
    if (familyName && color) {
        const familyNameBox = document.getElementById('familyNameBox');
        familyNameBox.innerText = `${familyName} 안방`;
        const entryBtn = document.getElementById('entryBtn');
        entryBtn.style.backgroundColor = `${color}`;
        const entryNumberInput = document.getElementById('entryNumberInput');
        entryNumberInput.style.border = `2px solid ${color}`;
    }

    // 입장하기 버튼 누를 시
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(entryNumber){
            checkEntryNumber(navigate, familyId, entryNumber, familyCode, familyName, color);
        }
        else{
            alert('입장 번호를 입력해 주세요');
        }     
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
                <p id="familyNameBox"></p>
                <p>입장번호를 입력해주세요</p>
                <p><input type="password" name="" id="entryNumberInput" placeholder="* 네 자리 이하 *" onChange={(onChangeEntryNumber)}/></p>
                <button type="submit" id="entryBtn">입장하기</button>
            </form>
        </ProfileAuthBody>
    )
}

export default Body;