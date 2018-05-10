import {isHelpOpen} from "../modal";

describe("modal state selectors", () => {
  const mockState = {
    modal: {
      help: true
    }
  };
  it('should return true if modal is open', () => {
    expect(isHelpOpen(mockState)).toEqual(mockState.modal.help);
  });
});
