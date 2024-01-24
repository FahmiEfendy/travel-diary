import { GET_BOOKMARK_FAILED, GET_BOOKMARK_REQUEST, GET_BOOKMARK_SUCCESS } from './constants';

export const getBookmarkRequest = () => ({
  type: GET_BOOKMARK_REQUEST,
});

export const getBookmarkSuccess = (data) => ({
  type: GET_BOOKMARK_SUCCESS,
  data,
});

export const getBookmarkFailed = (error) => ({
  type: GET_BOOKMARK_FAILED,
  error,
});
