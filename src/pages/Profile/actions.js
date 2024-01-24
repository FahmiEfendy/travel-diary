import { GET_PROFILE_FAILED, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from './constants';

export const getProfileRequest = (payload) => ({
  type: GET_PROFILE_REQUEST,
  payload,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  data,
});

export const getProfileFailed = (error) => ({
  type: GET_PROFILE_FAILED,
  error,
});
