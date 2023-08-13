import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

const serverApiImage = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
    },
});

export const getMemberInfo = async (familyId, memberId) => {
    let name = '';
    let prevPhoto = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/${memberId}/`).then((response)=> {
        name = response.data.name;
        prevPhoto = response.data.image;
    })
    return [name, prevPhoto];
};

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

export const changeMemberInfo = async (navigate, memberId, newName, newPhoto) => {
    await serverApiImage.put(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/profile/${memberId}/update/`, {'name':newName, 'image':newPhoto}).then((response)=>{
        console.log(response);
    })
};

export const deleteFamily = async(navigate, familyId, familyName) => {
    await serverApi.delete(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/delete`).then((response)=>{
        console.log(response);
        alert(`${familyName}이 완전히 삭제되었습니다 감사합니다`);
        navigate(`/`);
    })
}