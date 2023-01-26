import {
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
} from './actionTypes';
import {ActionWithPayload} from "./types";

const initState = {};

export default (state = initState, action: ActionWithPayload) => {
    switch (action.type) {
        // POST
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}