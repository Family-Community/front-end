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

export const createFamily = async (navigate, family_name, color, entry_number, name, selectedImage) => {
    await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/createfamily/`, {'family_name':family_name, 'color':color, 'entry_number':entry_number}).then((response)=>{
        const group_pk = response.data.id;
        createMember(navigate, family_name, group_pk, name, selectedImage);
    })
}

export const createMember = async (navigate, family_name, group_pk, name, selectedImage) => {
    await serverApiMember.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${group_pk}/profile/create/`, {'name':name, 'image':selectedImage}).then((response)=>{  
        alert(`${family_name} 안방으로 초대합니다.`);
        navigate(`/family_code/profileAuth`);
    })
}