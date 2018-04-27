export const CHANGE_SELECTED = "select/CHANGE_SELECTED";
export const changeSelected = (uri, id) => ({
  type: CHANGE_SELECTED,
  uri, id
});
