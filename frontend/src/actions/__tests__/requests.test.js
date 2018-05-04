import {
  DELETE_REQUEST, deleteRequest, EDIT_REQUEST, editRequest, IMPORT_REQUESTS, importRequests, REQUEST_BUILDER,
  requestBuilder, SAVE_REQUEST, saveRequest, SEND_CURRENT_REQUEST, SEND_CURRENT_REQUEST_SUCCESS, sendCurrentRequest,
  sendCurrentRequestSuccess
} from "../requests";
import mockRequests from "../__mocks__/mockRequests";

const mockRequest = {uri: 'test', id: '1', name: 'test', value: 'test'};

describe('requests actions', () => {
  const uri = 'test';
  const id = '1';

  it('should create an action to set requests', () => {

    const importRequestsAction = {
      type: IMPORT_REQUESTS,
      requests: mockRequests
    };

    expect(importRequests(mockRequests)).toEqual(importRequestsAction);

  });

  it('should create an action to save request', () => {

    const saveRequestAction = {
      type: SAVE_REQUEST,
      uri, id, request: {id: mockRequest.id, name: mockRequest.name, value: mockRequest.value}
    };
    expect(saveRequest(mockRequest)).toEqual(saveRequestAction);
  });

  it('should create an action to edit request', () => {

    const editRequestAction = {
      type: EDIT_REQUEST,
      uri, id, request: {name: mockRequest.name, value: mockRequest.value}
    };

    expect(editRequest(mockRequest)).toEqual(editRequestAction);
  });

  it('should create an action to delete request', () => {
    const deleteRequestAction = {
      type: DELETE_REQUEST,
      uri, id
    };
    expect(deleteRequest(uri, id)).toEqual(deleteRequestAction);
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
