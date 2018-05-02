import reducer from '../select';
import {changeSelected} from "../../actions/select";

describe('select reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should change selected request', () => {
    const id = '1';
    const uri = 'test';
    expect(reducer(undefined, changeSelected(uri, id))).toEqual({[uri]: id});
  });
});
