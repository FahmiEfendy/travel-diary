import {
  GET_MY_POST_FAILED,
  GET_MY_POST_REQUEST,
  GET_MY_POST_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
} from './constants';

// GET Profile
export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  data,
});

export const getProfileFailed = (error) => ({
  type: GET_PROFILE_FAILED,
  error,
});

// GET My Post
export const getMyPostRequest = () => ({
  type: GET_MY_POST_REQUEST,
});

export const getMyPostSuccess = (data) => ({
  type: GET_MY_POST_SUCCESS,
  data,
});

export const getMyPostFailed = (error) => ({
  type: GET_MY_POST_FAILED,
  error,
});
