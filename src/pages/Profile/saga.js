import { put, call, takeLatest } from 'redux-saga/effects';

import { getProfile } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_PROFILE_REQUEST } from './constants';
import { getProfileSuccess, getProfileFailed } from './actions';

function* doGetProfile() {
  yield put(setLoading(true));

  try {
    const response = yield call(getProfile);

    yield put(getProfileSuccess(response.data));
  } catch (err) {
    yield put(getProfileFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE_REQUEST, doGetProfile);
}
