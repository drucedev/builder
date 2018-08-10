import {getCurrentRequest, getCurrentRequests, getCurrentRequestsValues, getDefaultRequestSchema} from "../requests";

jest.mock('../router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../select', () => ({getSelectedId: () => 'default'}));

const mockState = {
  requests: {
    '/service/method': {
      'default': {
        id: 'default',
        name: 'default',
        value: '{}',
        schema: '{}'
      },
      '1': {
        id: '1',
        name: 'test',
        value: '{}'
      }
    }
  }
};

describe('requests state selectors', () => {
  it('should return current requests', () => {
    expect(getCurrentRequests(mockState)).toEqual(mockState.requests['/service/method']);
  });

  it('should return current requests values', () => {
    const requests = mockState.requests['/service/method'];
    const currentRequests = Object.keys(requests).map((requestId) => requests[requestId]);
    expect(getCurrentRequestsValues(mockState)).toEqual(currentRequests);
  });

  it('should return current request', () => {
    expect(getCurrentRequest(mockState)).toEqual(mockState.requests['/service/method']['default']);
  });

  it('should return default request schema', () => {
    expect(getDefaultRequestSchema(mockState)).toEqual(mockState.requests['/service/method']['default'].schema);
  });
});
