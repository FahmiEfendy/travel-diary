import { GET_POST_DETAIL_FAILED, GET_POST_DETAIL_REQUEST, GET_POST_DETAIL_SUCCESS } from './constans';

export const getPostDetailRequest = (payload) => ({
  type: GET_POST_DETAIL_REQUEST,
  payload,
});

export const getPostDetailSuccess = (data) => ({
  type: GET_POST_DETAIL_SUCCESS,
  data,
});

export const getPostDetailFailed = (error) => ({
  type: GET_POST_DETAIL_FAILED,
  error,
});
