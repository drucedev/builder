import {getCurrentUri} from "../router";

const mockState = {
  router: {
    location: {pathname: '/'}
  }
};

describe("router's state selectors", () => {
  it('should return current uri', () => {
    expect(getCurrentUri(mockState)).toEqual(mockState.router.location.pathname);
  });
});
