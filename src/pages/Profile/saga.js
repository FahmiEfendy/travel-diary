import { put, call, takeLatest } from 'redux-saga/effects';

import { getMyPost, getProfile } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_PROFILE_REQUEST } from './constants';
import { getProfileSuccess, getProfileFailed, getMyPostSuccess, getMyPostFailed } from './actions';

function* doGetProfile() {
  yield put(setLoading(true));

  // GET Profile
  try {
    const response = yield call(getProfile);

    yield put(getProfileSuccess(response.data));
  } catch (err) {
    yield put(getProfileFailed(err.message));
  }

  yield put(setLoading(false));

  yield put(setLoading(true));

  // GET My Post
  try {
    const response = yield call(getMyPost);

    yield put(getMyPostSuccess(response.data));
  } catch (err) {
    yield put(getMyPostFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE_REQUEST, doGetProfile);
}
