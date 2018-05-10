import {TOGGLE_MODAL, toggleModal} from "../modal";

describe('modal actions', () => {
  it('should create an action to toggle modal', () => {
    const modal = 'some';
    const expectedAction = {
      type: TOGGLE_MODAL,
      modal
    };
    expect(toggleModal(modal)).toEqual(expectedAction)
  });
});
