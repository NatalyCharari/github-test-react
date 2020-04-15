import { getGists } from "../api/gist";
import { isObject } from "lodash";

export const FETCH_GISTS_BEGIN = "FETCH_GISTS_BEGIN";
export const FETCH_GISTS_SUCCESS = "FETCH_GISTS_SUCCESS";
export const FETCH_GISTS_FAILURE = "FETCH_GISTS_FAILURE";

export const fetchGistsBegin = () => ({
  type: FETCH_GISTS_BEGIN,
});

export const fetchGistsSuccess = (gists) => ({
  type: FETCH_GISTS_SUCCESS,
  payload: { gists },
});

export const fetchGistsFailure = (error) => ({
  type: FETCH_GISTS_FAILURE,
  payload: { error },
});

const handleErrors = (error) => {
  if (isObject(error.response)) {
    if (error.response.status === 400) {
      console.log("Bad Request");
    } else if (error.response.status === 404) {
      console.log("Resource not found");
    } else if (error.response.status === 408) {
      console.log("Request Timeout");
    } else if (error.response.status === 500) {
      console.log("Internal Server Error");
    }
  }
};

const handleResponse = (request) => (dispatch) => {
  dispatch(fetchGistsBegin());

  return request
    .then((response) => {
      dispatch(fetchGistsSuccess(response.data));
    })
    .catch((error) => handleErrors(error));
};

const fetchData = (request, data) => (dispatch) => {
  if (data) {
    return dispatch(handleResponse(request(data)));
  } else {
    return dispatch(handleResponse(request()));
  }
};

export const fetchGists = () => {
  return fetchData(getGists, null);
};
