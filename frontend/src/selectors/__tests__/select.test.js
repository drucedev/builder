import {getSelectedId, isDefaultRequest} from "../select";

const mockState = {
  router: {location: {pathname: '/serviceName/methodName'}},
  select: {'/serviceName/methodName': 'default'}
};

describe("select's state selectors", () => {
  it('should return selected id', () => {
    expect(getSelectedId(mockState)).toEqual(mockState.select['/serviceName/methodName'])
  });

  it('should return true when select id is default', () => {
    expect(isDefaultRequest(mockState)).toBeTruthy();
  });
});
