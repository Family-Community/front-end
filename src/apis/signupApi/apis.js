import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

const serverApiMember = axios.create({
    headers: {
      'Content-Type': 'multipart/form-data',
    },
});

export const createFamily = async (navigate, familyName, color, entryNumber, name, selectedImage) => {
    await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/createfamily/`, {'family_name':familyName, 'color':color, 'entry_number':entryNumber}).then((response)=>{
        const id = response.data.id;
        const familyCode = response.data.family_code;
        createFirstMember(navigate, familyName, id, name, selectedImage, familyCode);
    })
}

export const createFirstMember = async (navigate, familyName, id, name, selectedImage, familyCode) => {
    await serverApiMember.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${id}/profile/create/`, {'name':name, 'image_original':selectedImage}).then((response)=>{  
        alert(`${familyName} 안방으로 초대합니다`);
        navigate(`/${familyCode}/profileAuth`);
    })
}