import http from '../../http';
import moxios from 'moxios';
import {
  DELETE_REQUEST, deleteRequest, EDIT_REQUEST, editRequest, fetchBuilder, IMPORT_REQUESTS, importRequests,
  postRequest, REQUEST_BUILDER, requestBuilder, SAVE_REQUEST, saveRequest, SEND_CURRENT_REQUEST,
  SEND_CURRENT_REQUEST_SUCCESS, sendCurrentRequest, sendCurrentRequestSuccess
} from "../requests";
import mockBuilder from "../../mocks/mockBuilder";
import mockStore from "../../mocks/mockStore";
import mockRequests from "../../mocks/mockRequests";

const mockRequest = {
  name: 'test',
  value: 'test'
};

describe('requests actions', () => {
  const uri = 'test';
  const id = '1';

  it('should create an action to set requests', () => {

    const importRequestsAction = {
      type: IMPORT_REQUESTS,
      requests: {[uri]: {...mockRequest, id}}
    };

    expect(importRequests(importRequestsAction.requests)).toEqual(importRequestsAction);

  });

  it('should create an action to save request', () => {

    const saveRequestAction = {
      type: SAVE_REQUEST,
      uri, id, request: {...mockRequest, id}
    };
    expect(saveRequest({...mockRequest, uri, id})).toEqual(saveRequestAction);
  });

  it('should create an action to edit request', () => {

    const editRequestAction = {
      type: EDIT_REQUEST,
      uri, id, request: mockRequest
    };

    expect(editRequest({...mockRequest, uri, id})).toEqual(editRequestAction);
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

describe('requests async actions', () => {
  beforeEach(function () {
    moxios.install(http);
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('should fetch builder and set requests', () => {
    const request = moxios.requests.mostRecent();
    moxios.wait(() => {
      request.respondWith({
        status: 200,
        response: mockBuilder
      });

      const expectedActions = [
        {type: REQUEST_BUILDER},
        {type: IMPORT_REQUESTS, requests: mockRequests}
      ];

      return mockStore.dispatch(fetchBuilder()).then(() => {
        expect(mockStore.getActions()).toEqual(expectedActions)
      });
    });
  });

  it('should send current request to api', () => {
    const request = moxios.requests.mostRecent();
    moxios.wait(() => {
      request.respondWith({
        status: 200,
        response: [{status: 'OK'}]
      });
      const expectedActions = [
        {type: SEND_CURRENT_REQUEST},
        {type: SEND_CURRENT_REQUEST_SUCCESS}
      ];

      return mockStore.dispatch(postRequest('/serviceName/methodName', request)).then(() => {
        expect(mockStore.getActions()).toEqual(expectedActions);
      });
    });
  });
});
