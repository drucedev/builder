import {CHANGE_SELECTED, changeSelected} from "../tabs";

describe('tabs actions', () => {
  it('should create an action to change selected tab', () => {
    const tab = 'test';
    const uri = 'test';
    const id = '1';
    const changeSelectedAction = {
      type: CHANGE_SELECTED,
      tab, uri, id
    };
    expect(changeSelected(tab, uri, id)).toEqual(changeSelectedAction);
  })
});