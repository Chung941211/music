import { Reducer } from 'redux';
import { IndexState, IndexActionType } from './types';

const initState: IndexState = {
    loading: false,
    data: [],
    errors: undefined
}

const reducer: Reducer<IndexState> = (state = initState, action) => {
    switch (action.type) {
        case IndexActionType.INDEX_FETCH_REQUESTED: {
            return { ...state, loading: true }
        }
        case IndexActionType.INDEX_FETCH_SUCCEEDED: {
            return { ...state, loading: false, data: action.payload.result }
        }
        case IndexActionType.INDEX_FETCH_FAILED: {
            return { ...state, loading: false, data: action.payload }
        }
        default: {
            return state
        }
    }
}

export { reducer as indexReducer }
