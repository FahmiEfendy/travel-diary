import { produce } from 'immer';
import {
  CREATE_BOOKMARK_FAILED,
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  GET_BOOKMARK_FAILED,
  GET_BOOKMARK_REQUEST,
  GET_BOOKMARK_SUCCESS,
} from './constants';

export const initialState = {
  bookmark: {
    data: [],
    isError: null,
  },
  createBookmark: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['bookmark'];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_BOOKMARK_REQUEST:
        draft.bookmark.isError = null;
        draft.bookmark.data = [];
        break;

      case GET_BOOKMARK_SUCCESS:
        draft.bookmark.isError = null;
        draft.bookmark.data = action.data;
        break;

      case GET_BOOKMARK_FAILED:
        draft.bookmark.isError = action.error;
        draft.bookmark.data = [];
        break;

      case CREATE_BOOKMARK_REQUEST:
        draft.createBookmark.isError = null;
        draft.createBookmark.data = [];
        break;

      case CREATE_BOOKMARK_SUCCESS:
        draft.createBookmark.isError = null;
        draft.createBookmark.data = action.data;
        break;

      case CREATE_BOOKMARK_FAILED:
        draft.createBookmark.isError = action.error;
        draft.createBookmark.data = [];
        break;

      default:
        break;
    }
  });

export default bookmarkReducer;
