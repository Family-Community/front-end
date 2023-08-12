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

export const posting = async (navigate, familyCode, familyId, memberId, title, content, photo) => {
    await serverApiImage.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/${memberId}/create/`, {'title':title, 'content':content, 'photo':photo}).then((response)=>{
      // 성공 시
      if(response.request.status === 201){
        alert('게시물 작성에 성공하였습니다');
        navigate(`/${familyCode}`)
      }
      // 실패 시
      else{
        alert('잠시 후 다시 시도해 주세요');
      }
    })
}