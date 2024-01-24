import { produce } from 'immer';

import { GET_POST_DETAIL_FAILED, GET_POST_DETAIL_REQUEST, GET_POST_DETAIL_SUCCESS } from './constans';

export const initialState = {
  detail: {
    data: [],
    isError: null,
  },
};

export const storedKey = ['detail'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_POST_DETAIL_REQUEST:
        draft.detail.isError = null;
        draft.detail.data = [];
        break;

      case GET_POST_DETAIL_SUCCESS:
        draft.detail.isError = null;
        draft.detail.data = action.data;
        break;

      case GET_POST_DETAIL_FAILED:
        draft.detail.isError = null;
        draft.detail.data = [];
        break;

      default:
        break;
    }
  });

export default detailReducer;
