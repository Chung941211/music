import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter } from 'connected-react-router'
import { History } from 'history';

import { IndexState } from './index/types';
import { indexReducer } from './index/reducer';
import indexSaga from './index/saga';

export interface stateObject {
    index: IndexState
}

export const reducerRoot = (history: History) => (
    combineReducers({
        index: indexReducer,
        router: connectRouter(history)
    })
)


export function* sagaRoot () {
    yield all([fork(indexSaga)])
}