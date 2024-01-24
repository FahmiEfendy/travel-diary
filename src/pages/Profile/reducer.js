import { produce } from 'immer';

import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_MY_POST_REQUEST,
  GET_MY_POST_SUCCESS,
  GET_MY_POST_FAILED,
} from './constants';

export const initialState = {
  profile: {
    data: [],
    isLoading: false,
    isError: null,
  },
  myPost: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const storedKey = ['profile'];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
        draft.profile.isLoading = true;
        draft.profile.isError = null;
        draft.profile.data = [];
        break;

      case GET_PROFILE_SUCCESS:
        draft.profile.isLoading = false;
        draft.profile.isError = null;
        draft.profile.data = action.data;
        break;

      case GET_PROFILE_FAILED:
        draft.profile.isLoading = false;
        draft.profile.isError = action.error;
        draft.profile.data = [];
        break;

      case GET_MY_POST_REQUEST:
        draft.myPost.isLoading = true;
        draft.myPost.isError = null;
        draft.myPost.data = [];
        break;

      case GET_MY_POST_SUCCESS:
        draft.myPost.isLoading = false;
        draft.myPost.isError = null;
        draft.myPost.data = action.data;
        break;

      case GET_MY_POST_FAILED:
        draft.myPost.isLoading = false;
        draft.myPost.isError = action.error;
        draft.myPost.data = [];
        break;

      default:
        break;
    }
  });

export default profileReducer;
