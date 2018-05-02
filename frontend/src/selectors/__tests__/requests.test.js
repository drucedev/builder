import {getCurrentRequest, getCurrentRequests, getCurrentRequestsValues, getDefaultRequestSchema} from "../requests";

const mockState = {
  router: {
    location: {pathname: '/serviceName/methodName'}
  },
  requests: {
    '/serviceName/methodName': {
      'default': {
        id: 'default',
        name: 'test',
        value: 'test',
        schema: 'test'
      }
    }
  },
  select: {}
};

describe('requests state selectors', () => {
  it('should return current requests', () => {
    expect(getCurrentRequests(mockState)).toEqual(mockState.requests['/serviceName/methodName']);
  });

  it('should return current requests values', () => {
    expect(getCurrentRequestsValues(mockState)).toEqual(Object.values(mockState.requests['/serviceName/methodName']));
  });

  it('should return current request', () => {
    expect(getCurrentRequest(mockState)).toEqual(mockState.requests['/serviceName/methodName']['default']);
  });

  it('should return default request schema', () => {
    expect(getDefaultRequestSchema(mockState)).toEqual(mockState.requests['/serviceName/methodName']['default'].schema);
  });
});
