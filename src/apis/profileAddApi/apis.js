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

export const createMember = async(navigate, familyId, name, image, familyName, familyCode) => {
    
    await serverApiMember.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/profile/create/`, {'name':name, 'image_original':image}).then((response)=>{
        if(response.request.status === 201){
            alert(`${name}님 ${familyName} 안방에 오신것을 환영합니다`);
            navigate(`/${familyCode}/profileAuth`);
        }
        else{
            alert(`잠시 후 다시 시도해 주세요`);
        }
        
    })

}