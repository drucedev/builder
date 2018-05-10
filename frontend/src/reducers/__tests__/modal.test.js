import reducer from '../modal';
import {toggleModal} from "../../actions/modal";

describe('modal reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  });

  it('should toggle full screen mode', () => {
    const modal = 'some';
    expect(reducer(undefined, toggleModal(modal))).toEqual({
      [modal]: true
    });
  });
});
