import { FETCH_SINGLE_FAILED, FETCH_SUCCESS } from "./constants"
import { FETCH_START } from "./constants"
import { FETCH_FAILED } from "./constants"
import { FETCH_SINGLE_BLOG_SUCCESS, DELETE_SINGLE_BLOG } from "./constants"

const initialState = {
    posts: [],
    activeBlog: {},
    loading: false,
    error: null
}


export const blogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_START:
            return {
                ...state, loading: true
            }

        case FETCH_SINGLE_BLOG_SUCCESS:
            return {
                ...state, activeBlog: action.payload, loading: false
            }
        case FETCH_SINGLE_FAILED:
            return {
                ...state, error: action.payload
            }

        case FETCH_SUCCESS:
            return {
                ...state, posts: action.payload, loading: false
            }

        case FETCH_FAILED:
            return {
                ...state, error: action.payload
            }

        case DELETE_SINGLE_BLOG:
            return {
                ...state, activeBlog: {}
            }
            
        default:
            return state;
    }
}