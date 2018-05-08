import {
  DELETE_REQUEST, deleteRequest, EDIT_REQUEST, editRequest, IMPORT_REQUESTS, importRequests, REQUEST_BUILDER,
  requestBuilder, SAVE_REQUEST, saveRequest, SEND_CURRENT_REQUEST, SEND_CURRENT_REQUEST_SUCCESS, sendCurrentRequest,
  sendCurrentRequestSuccess
} from "../requests";

describe('requests actions', () => {
  it('should create an action to set requests', () => {
    const requests = {
      '/service/method': {
        '1': {
          id: '1',
          name: 'test',
          value: '{}'
        }
      }
    };
    const importRequestsAction = {
      type: IMPORT_REQUESTS,
      requests
    };
    expect(importRequests(requests)).toEqual(importRequestsAction);
  });

  it('should create an action to save request', () => {
    const request = {uri: '/service/method', id: '1', name: 'test', value: '{}'};
    const saveRequestAction = {
      type: SAVE_REQUEST,
      uri: request.uri,
      id: request.id,
      request: {id: request.id, name: request.name, value: request.value}
    };
    expect(saveRequest(request)).toEqual(saveRequestAction);
  });

  it('should create an action to edit request', () => {
    const request = {uri: '/service/method', id: '1', name: 'test1'};
    const editRequestAction = {
      type: EDIT_REQUEST,
      uri: request.uri,
      id: request.id,
      request: {name: 'test1'}
    };
    expect(editRequest(request)).toEqual(editRequestAction);
  });

  it('should create an action to delete request', () => {
    const request = {
      uri: '/service/method',
      id: '1'
    };
    const deleteRequestAction = {
      type: DELETE_REQUEST,
      uri: request.uri,
      id: request.id
    };
    expect(deleteRequest(request.uri, request.id)).toEqual(deleteRequestAction);
  });

  it('should create an action to request builder', () => {
    const requestBuilderAction = {
      type: REQUEST_BUILDER
    };
    expect(requestBuilder()).toEqual(requestBuilderAction);
  });

  it('should create an action to send current request', () => {
    const sendCurrentRequestAction = {
      type: SEND_CURRENT_REQUEST
    };
    expect(sendCurrentRequest()).toEqual(sendCurrentRequestAction);
  });

  it('should create an action to send current request success', () => {
    const sendCurrentRequestSuccessAction = {
      type: SEND_CURRENT_REQUEST_SUCCESS
    };
    expect(sendCurrentRequestSuccess()).toEqual(sendCurrentRequestSuccessAction);
  });
});
