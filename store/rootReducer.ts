import { combineReducers } from 'redux';
import postReducer from './contacts/reducer';

const rootReducer = combineReducers({
    post: postReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;