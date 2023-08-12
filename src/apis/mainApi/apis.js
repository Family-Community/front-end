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

export const getPost = async(familyId, memberId) => {
    let post;
    await serverApi.post(`https://port-0-back-end-eu1k2llkz11als.sel4.cloudtype.app/group/${familyId}/${memberId}/`).then((response)=>{
        post = response.data.post;
    })
}

export const updateReaction = async (postId, reactionType) => {
    try {
        const response = await axios.post(`/api/update-reaction/${postId}`, {
            reactionType: reactionType
        });
        return response.data;
    } catch (error) {
        console.error('Error updating reaction:', error);
        throw error;
    }
};