import {
  FETCH_GISTS_BEGIN,
  FETCH_GISTS_SUCCESS,
  FETCH_GISTS_FAILURE,
} from "./actions";

const initialState = {
  items: [],
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
      };
    case FETCH_GISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.gists,
      };
    case FETCH_GISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
};

export default apiReducer;
