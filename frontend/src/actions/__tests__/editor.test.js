import {TOGGLE_FULL_SCREEN_MODE, toggleFullScreenMode} from "../editor";

describe('editor actions', () => {
  it('should create an action to toggle full screen mode', () => {
    const expectedAction = {
      type: TOGGLE_FULL_SCREEN_MODE
    };
    expect(toggleFullScreenMode()).toEqual(expectedAction)
  });
});
