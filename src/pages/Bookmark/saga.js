import { call, put, takeLatest } from 'redux-saga/effects';

import { createBookmark, getBookmark } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { CREATE_BOOKMARK_REQUEST, GET_BOOKMARK_REQUEST } from './constants';
import { getBookmarkSuccess, getBookmarkFailed, createBookmarkFailed, createBookmarkSuccess } from './actions';

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

function* doCreateBookmark(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(createBookmark, action.payload);

    yield put(createBookmarkSuccess(response.data));
  } catch (err) {
    yield put(createBookmarkFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_BOOKMARK_REQUEST, doGetBookmark);
  yield takeLatest(CREATE_BOOKMARK_REQUEST, doCreateBookmark);
}
