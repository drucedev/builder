import reducer from '../requests';
import {deleteRequest, editRequest, importRequests, saveRequest} from "../../actions/requests";
import mockRequests from "../../mocks/mockRequests";

const mockRequest = {uri: 'test', id: '1', name: 'test', value: 'test'};

const savedRequest = {
  id: mockRequest.id,
  name: mockRequest.name,
  value: mockRequest.value
};

describe('requests reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  });

  it('should import requests', () => {
    expect(reducer(undefined, importRequests(mockRequests))).toEqual(mockRequests)
  });

  it('should save request', () => {
    expect(reducer(undefined, saveRequest(mockRequest))).toEqual({[mockRequest.uri]: {[mockRequest.id]: savedRequest}});
  });

  it('should edit request', () => {
    const state = reducer(undefined, saveRequest(mockRequest));
    expect(reducer(state, editRequest(mockRequest))).toEqual({[mockRequest.uri]: {[mockRequest.id]: savedRequest}});
  });

  it('should delete request', () => {
    const state = reducer(undefined, saveRequest(mockRequest));
    expect(reducer(state, deleteRequest(mockRequest.uri, mockRequest.id))).toEqual({[mockRequest.uri]: {}});
  })
});
