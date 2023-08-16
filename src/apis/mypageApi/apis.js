import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getFamilyInfo = async (familyCode) => {
    let familyId = '';
    let color = '';
    let familyName = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/familycode/${familyCode}`).then((response)=> {
        familyId = response.data.id;
        color = response.data.color;
        familyName = response.data.family_name;
    })
    return [familyId, color, familyName];
};

export const getMemberInfo = async (familyId, memberId) => {
    let name = '';
    let prevPhoto = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/${memberId}/`).then((response)=> {
        name = response.data.name;
        prevPhoto = response.data.image;
    })
    return [name, prevPhoto];
};

export const getMemberPost = async (memberId) => {
    let post = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/getuserpost/${memberId}`).then((response)=>{
        post = response.data.post;
    })
    return post;
}