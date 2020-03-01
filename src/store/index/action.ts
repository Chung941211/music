import { action } from 'typesafe-actions';
import { IndexActionType, Personalized } from './types';


export const indexFetchRequst = () => action(IndexActionType.INDEX_FETCH_REQUESTED);

export const indexFetchSucceeded = (data: Personalized[]) => action(IndexActionType.INDEX_FETCH_SUCCEEDED, data);

export const indexFetchFailed = (message: string) => action(IndexActionType.INDEX_FETCH_FAILED, message);