import { produce } from 'immer';
import { CREATE_POST_FAILED, CREATE_POST_REQUEST, CREATE_POST_SUCCESS } from './constants';

export const initialState = {
  createPost: {
    data: [],
    isError: null,
  },
};

export const storedKey = [''];

const createReducerPage = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST_REQUEST:
        draft.createPost.isError = null;
        draft.createPost.data = [];
        break;

      case CREATE_POST_SUCCESS:
        draft.createPost.isError = null;
        draft.createPost.data = action.data;
        break;

      case CREATE_POST_FAILED:
        draft.createPost.isError = action.error;
        draft.createPost.data = [];
        break;
    }
  });

export default createReducerPage;
