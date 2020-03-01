import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { IndexActionType } from './types';
import { indexFetchSucceeded, indexFetchFailed } from './action';
import { Apis } from '../../utils/http';

function* getPersonalized () {
  try {

    const result = yield call(Apis, 'get', '/personalized');
    
    yield put(indexFetchSucceeded(result));

  } catch (err) {
    yield put(indexFetchFailed(err));
  }
}


function* watchRequeset () {
    yield takeEvery(IndexActionType.INDEX_FETCH_REQUESTED, getPersonalized)
}

export default function* indexSaga () {
    yield all([fork(watchRequeset)])
}