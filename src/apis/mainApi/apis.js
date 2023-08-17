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
        post = response.data.post;
    })
    return post;
}

export const getSearchInfo = async(familyId, searchContent) => {
    let post = [];
    await serverApi.get(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/${searchContent}`).then((response)=> {
        post = response.data.post;
    })
    return post;
}

export const reaction = async(navigate, familyCode, familyId, memberId, postId, reactionNum) => {

    await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/${memberId}/${postId}/reaction/${reactionNum}/`).then((response)=> {
    })

}

// export const reaction = async (familyId, memberId, postId, reactionNum) => {
//     try {
//         await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/contents/${familyId}/${memberId}/${postId}/reaction/${reactionNum}`);
//         console.log(`postId ${postId}에 대한 ${reactionNum} 리액션이 성공적으로 전송되었습니다.`);
//     } catch (error) {
//         console.error('에러:', error);
//         // // 응답 데이터가 있는 경우
//         // if (error.response) {
//         //     console.log('응답 데이터:', error.response.data);
//         // }
//     }
// }


