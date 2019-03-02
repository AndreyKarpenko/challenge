import { GET_POSTS, GET_POST, CREATE_POST, DELETE_POST } from '../actions/types';
import { CREATE_COMMENT } from "../actions/types";

const initialState = {
    posts: [],
    post: null,
    comments: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case GET_POST:
            return {
                ...state,
               post: action.payload,
               comments: action.payload.comments
            };
        case CREATE_POST:
            return {
                ...state,
                posts: action.payload
            };
        case DELETE_POST:
            return {
                ...state,
                posts: action.payload
            };
        case CREATE_COMMENT:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
}