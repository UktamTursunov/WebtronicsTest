import {FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS} from "./actionTypes";
import {ActionWithPayload, FetchAboutUsPayload} from "./types";

export const fetchPostsRequest = (
    payload: FetchAboutUsPayload
): ActionWithPayload => ({
    type: FETCH_POSTS_REQUEST,
    payload,
});
export const fetchPostsSuccess = (): ActionWithPayload => ({
    type: FETCH_POSTS_SUCCESS,
});
export const fetchPostsFailure = (error: { error: Error }) => ({
    type: FETCH_POSTS_FAILURE,
    error,
});