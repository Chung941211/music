import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';


import { IndexState } from './index/types';
import { indexReducer } from './index/reducer';
import indexSaga from './index/saga';

export interface stateObject {
    index: IndexState
}

export const reducerRoot = () => {
    combineReducers({
        index: indexReducer
    })
}

export function* sagaRoot () {
    yield all([fork(indexSaga)])
}