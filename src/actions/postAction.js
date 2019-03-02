import axios from 'axios';

import { CREATE_POST, DELETE_POST, GET_POST, GET_POSTS } from './types';
import store from "../store";

export const getAllPosts = () => dispatch => {
    axios.get(`https://simple-blog-api.crew.red/posts`)
        .then(data => {
            dispatch({
                type: GET_POSTS,
                payload: data.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
};

export const getPost = (id) => dispatch => {
    axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
        .then(data => {
            dispatch({
                type: GET_POST,
                payload: data.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
};

export const createPost = (data, history) => dispatch => {
    axios.post(`https://simple-blog-api.crew.red/posts`, data)
        .then(data => {
            let posts = store.getState().post.posts;
            posts.push(data.data);
            dispatch({
                type: CREATE_POST,
                payload: posts
            });
            history.push('/');
        })
        .catch(err => {
            console.log(err.response)
        })
};

export const updatePost = (id, data, history) => dispatch => {
    axios.put(`https://simple-blog-api.crew.red/posts/${id}`, data)
        .then(() => {
            history.push('/');
        })
        .catch(err => {
            console.log(err.response)
        })
};

export const deletePost = (id) => dispatch => {
    axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
        .then(() => {
            let posts = store.getState().post.posts.filter(item => item.id !== id);
            dispatch({
                type: DELETE_POST,
                payload: posts
            });
        })
        .catch(err => {
            console.log(err.response)
        })
};