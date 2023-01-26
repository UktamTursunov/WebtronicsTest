import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_POSTS_REQUEST,
} from './actionTypes';
import request from '../../api/api';
import {fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess} from "./action";

function* fetchPostsSaga({payload,}: ReturnType<typeof fetchPostsRequest>) {
    try {
        yield call(request.post, 'feedback', payload);
        yield put(fetchPostsSuccess());
    } catch (e: any) {
        yield put(
            fetchPostsFailure({
                error: e,
            })
        );
    }
}

function* postSaga() {
    yield all([
        takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga),
    ]);
}

export default postSaga;