import {getSelectedId, isDefaultRequest} from "../select";
jest.mock('../router', () => ({getCurrentUri: () => '/service/method'}));

const mockState = {
  select: {'/service/method': 'default'}
};

describe("select's state selectors", () => {
  it('should return selected id', () => {
    expect(getSelectedId(mockState)).toEqual(mockState.select['/service/method']);
  });

  it('should return true when select id is default', () => {
    expect(isDefaultRequest(mockState)).toBeTruthy();
  });
});
