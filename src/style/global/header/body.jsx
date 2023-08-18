import { HeaderBox } from "./style"
import { useParams, useNavigate, isRouteErrorResponse } from "react-router-dom";
import { getFamilyInfo } from "../../../apis/mypageApi/apis";
import { useState } from "react";
function Body() {
    // familyCode, memberId, me
    const familyCode = useParams().familyCode;
    const memberId = useParams().memberId;
    const me = useParams().me;

    // familyId
    const [familyId, setFamilyId] = useState('');
    const findFamilyId = async () => {
        const familyInfo = await getFamilyInfo(familyCode);
        setFamilyId(familyInfo[0]);
    }
    if(familyCode){
        findFamilyId();
    }
    // 로고 클릭 시 구현
    const navigate = useNavigate();
    const handleOnClick = (e) => {
        e.preventDefault();

        if(familyCode && memberId){
            navigate(`/${familyCode}`, {state: {'familyId': familyId, 'memberId': memberId}});
        }
    }
    return (
        <HeaderBox>
            <p onClick={handleOnClick}></p>
        </HeaderBox>
    )
}

export default Body