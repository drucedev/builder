import reducer from '../tabs';
import {changeSelected} from "../../actions/tabs";

describe('tabs reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should change selected tab', () => {
    const uri = 'test';
    const id = '1';
    const tab = 'test';
    expect(reducer(undefined, changeSelected(tab, uri, id))).toEqual({[uri]: {[id]: tab}})
  })
});
