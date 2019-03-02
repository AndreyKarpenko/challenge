import axios from 'axios';
import { getPost } from "./postAction";

export const createComment = (id, comment) => dispatch => {
    const data = { postId: id, body: comment };
    axios.post(`https://simple-blog-api.crew.red/comments`, data)
        .then(() => {
            dispatch(getPost(id))
        })
        .catch(err => {
            console.log(err)
        })
};