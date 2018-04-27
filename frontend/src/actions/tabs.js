export const CHANGE_SELECTED = "tabs/CHANGE_SELECTED";
export const changeSelected = (tab, uri, id) => ({
  type: CHANGE_SELECTED,
  tab, uri, id
});
