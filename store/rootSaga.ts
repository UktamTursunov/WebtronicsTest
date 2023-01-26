import { all, fork } from 'redux-saga/effects';
import postSaga from './contacts/sagas';

export function* rootSaga() {
    yield all([
        fork(postSaga),
    ]);
}