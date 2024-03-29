import { produce } from 'immer';

import { GET_POST_FAILED, GET_POST_REQUEST, GET_POST_SUCCCESS } from './constants';

export const initialState = {
  post: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['post'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_REQUEST:
        draft.post.isError = null;
        draft.post.data = [];
        break;

      case GET_POST_SUCCCESS:
        draft.post.isError = null;
        draft.post.data = action.data;
        break;

      case GET_POST_FAILED:
        draft.post.isError = action.error;
        draft.post.data = [];
        break;

      default:
        break;
    }
  });

export default homeReducer;
