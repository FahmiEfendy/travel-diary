import {
  CREATE_BOOKMARK_FAILED,
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  GET_BOOKMARK_FAILED,
  GET_BOOKMARK_REQUEST,
  GET_BOOKMARK_SUCCESS,
} from './constants';

// GET Bookmark
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

// CREATE Bookmark
export const createBookmarkRequest = (payload) => ({
  type: CREATE_BOOKMARK_REQUEST,
  payload,
});

export const createBookmarkSuccess = (data) => ({
  type: CREATE_BOOKMARK_SUCCESS,
  data,
});

export const createBookmarkFailed = (error) => ({
  type: CREATE_BOOKMARK_FAILED,
  error,
});
