import {CHANGE_SELECTED, changeSelected} from "../select";

describe('select actions', () => {
  it('should create an action to change selected request', () => {
    const uri = 'test';
    const id = '1';
    const changeSelectedAction = {
      type: CHANGE_SELECTED,
      uri, id
    };
    expect(changeSelected(uri, id)).toEqual(changeSelectedAction);
  });
});