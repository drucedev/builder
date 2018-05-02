import {isFullScreenMode} from "../editor";

const mockState = {
  editor: {
    fullScreenMode: true
  }
};

describe("editor's state selectors", () => {
  it('should return true if editor is in full screen mode', () => {
    expect(isFullScreenMode(mockState)).toEqual(mockState.editor.fullScreenMode);
  });
});
