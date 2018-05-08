import {isFullScreenMode} from "../editor";

describe("editor's state selectors", () => {
  const mockState = {
    editor: {
      fullScreenMode: true
    }
  };
  it('should return true if editor is in full screen mode', () => {
    expect(isFullScreenMode(mockState)).toEqual(mockState.editor.fullScreenMode);
  });
});
