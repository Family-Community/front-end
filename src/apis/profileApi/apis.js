import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getFamilyMember = async (familyId) => {
    let familyMember;
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/profile/`).then((response)=>{
        familyMember = response.data.family;
    })
    return familyMember;
}