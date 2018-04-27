import {createSelector} from 'reselect';

const editorState = state => state.editor;

export const isFullScreenMode = createSelector(
  editorState, editor => editor.fullScreenMode
);
