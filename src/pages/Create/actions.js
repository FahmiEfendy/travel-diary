import { CREATE_POST_FAILED, CREATE_POST_REQUEST, CREATE_POST_SUCCESS } from './constants';

export const createPostRequest = (payload) => ({
  type: CREATE_POST_REQUEST,
  payload,
});

export const createPostSuccess = (data) => ({
  type: CREATE_POST_SUCCESS,
  data,
});

export const createPostFailed = (error) => ({
  type: CREATE_POST_FAILED,
  error,
});
