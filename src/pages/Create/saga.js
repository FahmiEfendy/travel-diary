import { call, put, takeLatest } from 'redux-saga/effects';

import { createPost } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { CREATE_POST_REQUEST } from './constants';
import { createPostFailed, createPostSuccess } from './actions';

function* doCreatePost(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(createPost, action.payload);

    yield put(createPostSuccess(response.data));
  } catch (err) {
    yield put(createPostFailed(action.error));
  }

  yield put(setLoading(false));
}

export default function* createSagaPage() {
  yield takeLatest(CREATE_POST_REQUEST, doCreatePost);
}
