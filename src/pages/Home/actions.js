import { GET_POST_FAILED, GET_POST_REQUEST, GET_POST_SUCCCESS } from './constants';

export const getPostRequest = () => ({
  type: GET_POST_REQUEST,
});

export const getPostSuccess = (data) => ({
  type: GET_POST_SUCCCESS,
  data,
});

export const getPostFailed = (error) => ({
  type: GET_POST_FAILED,
  error,
});
