import http from "../http.js";
import config from "../config.js";
import {prepareJson, prettyJson, readJsonFile, saveJsonFile} from "../utils.js";
import {encodeUri} from "../utils";
import {toastr} from 'react-redux-toastr';

export const SET_REQUESTS = "requests/SET_REQUESTS";
export const setRequests = (requests) => ({
  type: SET_REQUESTS,
  requests
});

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
const requestBuilder = () => ({
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
export const importRequests = file => (dispatch, getState) => {
  dispatch({type: IMPORT_REQUESTS});
  readJsonFile(file)
    .then(uriToRequestsMapFromFile => {
      const uriToRequestsMap = getState().requests;
      dispatch(setRequests({...uriToRequestsMap, ...uriToRequestsMapFromFile}));
    })
    .catch(err => toastr.error('Ошибка', err.message));
};

export const EXPORT_REQUESTS = "requests/EXPORT_REQUESTS";
export const exportRequests = uri => (dispatch, getState) => {
  dispatch({type: EXPORT_REQUESTS});
  saveJsonFile(uri, {[uri]: getState().requests[uri]});
};

export const EXPORT_ALL_REQUESTS = "requests/EXPORT_ALL_REQUESTS";
export const exportAllRequests = () => (dispatch, getState) => {
  dispatch({type: EXPORT_ALL_REQUESTS});
  saveJsonFile('requests', getState().requests);
};

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
      dispatch(setRequests(requests));
      return fgServices;
    });
};

export const postRequest = (uri, request) => (dispatch) => {
  dispatch(sendCurrentRequest());
  const encodedUri = encodeUri(uri);
  return http.post(encodedUri, request.value,
    {headers: {'Content-Type': 'application/json;charset=utf8'}}
  ).then(res => {
    const json = prettyJson(res.data);
    const response = res.data.stackTrace ? prepareJson(json) : json;
    dispatch(sendCurrentRequestSuccess());
    return response;
  });
};
