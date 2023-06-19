import { ADD_FAV, REMOVE_FAV } from "./action_types"

const initialState = {
    myFavorites: [],
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [ payload, ...state.myFavorites]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== payload)
            }
        default:
            return { ...state }
    }
}

export default rootReducer;