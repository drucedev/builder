import {getSelectedTab} from "../tabs";

const mockState = {
  router: {location: {pathname: '/serviceName/methodName'}},
  tabs: {'/serviceName/methodName': {'1': 'test'}},
  select: {'/serviceName/methodName': '1'}
};

describe('tabs state selectors', () => {
  it('should return selected tab', () => {
    expect(getSelectedTab(mockState)).toEqual(mockState.tabs['/serviceName/methodName']['1']);
  });
});
