import { put, call, takeLatest } from 'redux-saga/effects';

import { getMyPost, getProfile } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_PROFILE_REQUEST } from './constants';
import { getProfileSuccess, getProfileFailed, getMyPostSuccess, getMyPostFailed } from './actions';

function* doGetProfile() {
  yield put(setLoading(true));

  try {
    const profileResponse = yield call(getProfile);
    const postResponse = yield call(getMyPost);

    yield put(getProfileSuccess(profileResponse.data));
    yield put(getMyPostSuccess(postResponse.data));
  } catch (err) {
    yield put(getProfileFailed(err.message));
    yield put(getMyPostFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE_REQUEST, doGetProfile);
}
