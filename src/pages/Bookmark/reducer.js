import { produce } from 'immer';
import { GET_BOOKMARK_FAILED, GET_BOOKMARK_REQUEST, GET_BOOKMARK_SUCCESS } from './constants';

export const initialState = {
  bookmark: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const storedKey = ['bookmark'];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_BOOKMARK_REQUEST:
        draft.bookmark.isLoading = true;
        draft.bookmark.isError = null;
        draft.bookmark.data = [];
        break;

      case GET_BOOKMARK_SUCCESS:
        draft.bookmark.isLoading = false;
        draft.bookmark.isError = null;
        draft.bookmark.data = action.data;
        break;

      case GET_BOOKMARK_FAILED:
        draft.bookmark.isLoading = false;
        draft.bookmark.isError = action.error;
        draft.bookmark.data = [];
        break;

      default:
        break;
    }
  });

export default bookmarkReducer;
