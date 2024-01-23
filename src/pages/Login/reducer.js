import { produce } from 'immer';

import { POST_LOGIN_FAILED, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from './constants';

export const initialState = {
  login: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const storedKey = ['login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_LOGIN_REQUEST:
        draft.login.isLoading = true;
        draft.login.isError = null;
        draft.login.data = [];
        break;

      case POST_LOGIN_SUCCESS:
        draft.login.isLoading = false;
        draft.login.isError = null;
        draft.login.data = action.data;
        break;

      case POST_LOGIN_FAILED:
        draft.login.isLoading = false;
        draft.login.isError = action.error;
        draft.login.data = [];
        break;

      default:
        break;
    }
  });

export default loginReducer;
