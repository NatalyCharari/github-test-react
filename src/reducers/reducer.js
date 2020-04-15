import {
  FETCH_GISTS_BEGIN,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE,
  UPDATE_GIST_SUCCESS,
} from "./actions";

const initialState = {
  items: [],
  currentItem: null,
  loading: false,
  error: null,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GISTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        currentItem: null,
      };
    case FETCH_GISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.gists,
        currentItem: null,
      };
    case FETCH_GISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
        currentItem: null,
      };
    case UPDATE_GIST_SUCCESS:
      return {
        ...state,
        currentItem: action.payload.gist,
      };

    default:
      return state;
  }
};

export default apiReducer;
