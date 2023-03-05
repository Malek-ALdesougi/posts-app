import { FETCH_SINGLE_FAILED, FETCH_START, FETCH_SUCCESS } from "./constants"
import { FETCH_FAILED } from "./constants"
import { FETCH_SINGLE_BLOG_SUCCESS } from "./constants"
import axios from "axios"


export function fetchData(url) {

    return ((dispatch) => {

        // start Fetching the data
        dispatch({
            type: FETCH_START,
        })

        fetch(url)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCH_SUCCESS,
                payload: data
            }))
            .catch((error) => {
                dispatch({
                    type: FETCH_FAILED,
                    payload: error
                })
            })
    })
}



export function fetchSingleBlog(url) {

    return ((dispatch) => {

        // start Fetching the data
        dispatch({
            type: FETCH_START,
        })

        fetch(url)
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCH_SINGLE_BLOG_SUCCESS,
                payload: data
            }))
            .catch((error) => {
                dispatch({
                    type: FETCH_SINGLE_FAILED,
                    payload: error
                })
            })
    })
}


export function deleteSingleBlog(url) {
    return ((dispatch) => {
        axios.delete(url)
            .then(response => {
            })
            .catch(error => {
                console.error('There was a problem deleting the item:', error);
            });
    })
}


export function cleanUpActiveBlog(){

    return((dispatch) => {
        dispatch({
            type: 'DELETE_SINGLE_BLOG'
        })
    })

}




