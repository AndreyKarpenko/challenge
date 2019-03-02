import axios from 'axios';
import store from "../store";
import { CREATE_COMMENT } from "./types";

export const createComment = (data) => dispatch => {
    axios.post(`https://simple-blog-api.crew.red/comments`, data)
        .then(data => {
            let comments = store.getState().post.comments;
            comments.push(data.data);
            dispatch({
                type: CREATE_COMMENT,
                payload: comments
            })
        })
        .catch(err => {
            console.log(err)
        })
};