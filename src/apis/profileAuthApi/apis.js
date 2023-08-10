import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getFamilyInfo = async (familyCode) => {
    let familyId = '';
    let familyName = '';
    let color = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/familycode/${familyCode}/`).then((response) => {
        familyId = response.data.id;
        familyName = response.data.family_name;
        color = response.data.color;
    })
    return [familyId, familyName, color];
}

export const checkEntryNumber = async (navigate, familyId, entryNumber, familyCode, familyName) => {
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/enter/${entryNumber}`).then((response) => {
        const result = response.data;
        if (result){
            alert(`${familyName} 안방에 오신 것을 환영합니다`);
            navigate(`/${familyCode}/profile`);
        }
        else{
            alert('입장번호가 일치하지 않아요');
        }
    })
}