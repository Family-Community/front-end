import axios from "axios";

const serverApi = axios.create({
    // api 기본 사이트
    // baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

export const createFamily = async (family_name, color, entry_number, name, formData) => {
    await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/createfamily/`, {'family_name':family_name, 'color':color, 'entry_number':entry_number, 'name':name, 'image':''}).then((response)=>{
        console.log(response);
    })
}