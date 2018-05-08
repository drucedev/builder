import {getSelectedTab} from "../tabs";
jest.mock('../select', () => ({getSelectedId: () => '1'}));
jest.mock('../router', () => ({getCurrentUri: () => '/service/method'}));

const mockState = {
  tabs: {'/service/method': {'1': 'value'}}
};

describe('tabs state selectors', () => {
  it('should return selected tab', () => {
    expect(getSelectedTab(mockState)).toEqual(mockState.tabs['/service/method']['1']);
  });
});
