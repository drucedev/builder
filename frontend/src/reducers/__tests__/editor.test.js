import reducer from '../editor';
import {toggleFullScreenMode} from "../../actions/editor";

describe('editor reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      fullScreenMode: false
    })
  });

  it('should toggle full screen mode', () => {
    expect(reducer(undefined, toggleFullScreenMode())).toEqual({
      fullScreenMode: true
    })
  });
});
