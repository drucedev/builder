import reducer from '../requests';
import {deleteRequest, editRequest, importRequests, saveRequest} from "../../actions/requests";

describe('requests reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  });

  it('should import requests', () => {
    const requests = {
      '/service/method': {
        '1': {
          id: '1',
          name: 'test',
          value: '{}'
        }
      }
    };
    expect(reducer(undefined, importRequests(requests))).toEqual(requests)
  });

  const request = {uri: 'test', id: '1', name: 'test', value: '{}'};
  it('should save request', () => {
    expect(reducer(undefined, saveRequest(request))).toEqual({
      [request.uri]: {
        [request.id]: {id: request.id, name: request.name, value: request.value}
      }
    });
  });

  it('should edit request', () => {
    const state = reducer(undefined, saveRequest(request));
    expect(reducer(state, editRequest(request))).toEqual({
      [request.uri]: {
        [request.id]: {id: request.id, name: request.name, value: request.value}
      }
    });
  });

  it('should delete request', () => {
    const state = reducer(undefined, saveRequest(request));
    expect(reducer(state, deleteRequest(request.uri, request.id))).toEqual({[request.uri]: {}});
  })
});
