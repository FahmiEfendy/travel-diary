import { call, put, takeLatest } from 'redux-saga/effects';

import { getBookmark } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_BOOKMARK_REQUEST } from './constants';
import { getBookmarkSuccess, getBookmarkFailed } from './actions';

function* doGetBookmark() {
  yield put(setLoading(true));

  try {
    const response = yield call(getBookmark);

    yield put(getBookmarkSuccess(response.data));
  } catch (err) {
    yield put(getBookmarkFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_BOOKMARK_REQUEST, doGetBookmark);
}
