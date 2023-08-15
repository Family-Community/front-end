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

export const postingUpdate = async (navigate, familyCode, familyId, memberId, postId, title, content, photo) => {
  await serverApiImage.put(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/${memberId}/${postId}/update`, {'title':title, 'content':content, 'photo':photo}).then((response)=>{
    // 성공 시
    console.log(response);
  })
}