import axios from "axios";

const serverApi = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
});

export const getMemberInfo = async(familyId, memberId) => {
    let color = '';
    let image = '';
    let name = '';
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/${memberId}/`).then((response)=>{
        color = response.data.color;
        image = response.data.image;
        name = response.data.name;
    })
    return [color, image, name];
}

export const getPostInfo = async(familyId) => {
    let post = [];
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/`).then((response)=> {
        console.log(response)
        post = response.data.post;
    })
    return post;
}



