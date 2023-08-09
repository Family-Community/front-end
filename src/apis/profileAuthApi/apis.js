import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getFamilyId = async (familyCode) => {
    let familyId = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/familycode/${familyCode}/`).then((response) => {
        familyId = response.data.id;
    })
    return familyId;
}

export const checkEntryNumber = async (navigate, familyId, entryNumber, familyCode) => {
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/enter/${entryNumber}`).then((response) => {
        const result = response.data;
        if (result){
            alert('환영합니다');
            navigate(`/${familyCode}/profile`);
        }
        else{
            alert('입장번호가 일치하지 않아요');
        }
    })
}