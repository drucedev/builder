import http from "../http.js";
import config from "../config.js";
import {prepareJson, prettyJson} from "../utils.js";
import {encodeUri} from "../utils";

export const SAVE_REQUEST = "requests/SAVE_REQUEST";
export const saveRequest = ({uri, ...request}) => ({
  type: SAVE_REQUEST,
  uri, id: request.id, request
});

export const EDIT_REQUEST = "requests/EDIT_REQUEST";
export const editRequest = ({uri, id, ...request}) => ({
  type: EDIT_REQUEST,
  uri, id, request
});

export const DELETE_REQUEST = "requests/DELETE_REQUEST";
export const deleteRequest = (uri, id) => ({
  type: DELETE_REQUEST,
  uri, id
});

export const REQUEST_BUILDER = "requests/REQUEST_BUILDER";
export const requestBuilder = () => ({
  type: REQUEST_BUILDER
});
export const SEND_CURRENT_REQUEST = "requests/SEND_CURRENT_REQUEST";
export const sendCurrentRequest = () => ({
  type: SEND_CURRENT_REQUEST
});

export const SEND_CURRENT_REQUEST_SUCCESS = "requests/SEND_CURRENT_REQUEST_SUCCESS";
export const sendCurrentRequestSuccess = () => ({
  type: SEND_CURRENT_REQUEST_SUCCESS
});

export const IMPORT_REQUESTS = "requests/IMPORT_REQUESTS";
export const importRequests = (requests) => ({
  type: IMPORT_REQUESTS,
  requests
});
export const RESET_LOCAL_STORAGE = "requests/RESET_LOCAL_STORAGE";
export const resetLocalStorage = () => dispatch => {
  dispatch({type: RESET_LOCAL_STORAGE});
  dispatch(fetchBuilder());
};

export const fetchBuilder = () => (dispatch, getState) => {
  dispatch(requestBuilder());
  return http.get(config.builderUri)
    .then((response) => {
      const requestWrapper = ['java.util.ArrayList'];
      const fgServices = response.data;
      const requests = fgServices.reduce((result, service) => {
        service.methods.forEach(method => {
          const uri = `/${service.name}/${method.name}`;
          const requestExample = method.requestParameters.map(request => request.example);
          const requestSchema = method.requestParameters.map(request => request.description);
          const value = [...requestWrapper, ...requestExample];
          const request = {
            [config.defaultRequestId]: {
              id: config.defaultRequestId,
              name: config.defaultRequestName,
              schema: prettyJson(requestSchema),
              value: prettyJson(value)
            }
          };
          const requests = getState().requests[uri];
          result[uri] = {...requests, ...request};
        });
        return result;
      }, {});
      dispatch(importRequests(requests));
      return fgServices;
    });
};

export const postRequest = (uri, request) => (dispatch) => {
  dispatch(sendCurrentRequest());
  const encodedUri = encodeUri(uri);
  return http.post(encodedUri, request.value, {headers: {'Content-Type': 'application/json;charset=utf8'}})
    .then((res) => {
      const json = prettyJson(res.data);
      const response = res.data.stackTrace ? prepareJson(json) : json;
      dispatch(sendCurrentRequestSuccess());
      return response;
    });
};
