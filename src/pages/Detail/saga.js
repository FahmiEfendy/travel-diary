import { put, call, takeLatest } from 'redux-saga/effects';

import { getPostDetail } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_POST_DETAIL_REQUEST } from './constans';
import { getPostDetailFailed, getPostDetailSuccess } from './actions';

function* doGetDetailPost(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getPostDetail, action.payload);

    yield put(getPostDetailSuccess(response.data));
  } catch (err) {
    yield put(getPostDetailFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_POST_DETAIL_REQUEST, doGetDetailPost);
}
