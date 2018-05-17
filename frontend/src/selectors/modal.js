import {createSelector} from "reselect";

const modalState = (state) => state.modal;

export const isHelpOpen = createSelector(
  modalState, ({help}) => !!help
);
