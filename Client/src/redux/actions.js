import { ADD_FAV, REMOVE_FAV } from "./action_types"
import axios from "axios";

export function addFav(payload) {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, payload)
            return dispatch({
                type: ADD_FAV,
                payload: response.data
            })
        } catch (err) {
            alert(err.response.data.error)
        }
    }
}

export function removeFav(id) {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const response = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data
            })
        } catch (err) {
            alert(err.response.data.error)
        }
    }
}