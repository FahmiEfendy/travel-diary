import { put, call, takeLatest } from 'redux-saga/effects';

import { getPost } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_POST_REQUEST } from './constants';
import { getPostSuccess, getPostFailed } from './actions';

function* doGetPost() {
  yield put(setLoading(true));

  try {
    const response = yield call(getPost);

    yield put(getPostSuccess(response.data));
  } catch (err) {
    yield put(getPostFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_POST_REQUEST, doGetPost);
}
