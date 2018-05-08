import React from "react";
import renderer from "react-test-renderer";
import Editor from "../Editor";

jest.mock('codemirror-formatting', () => ({default: {}}));
jest.mock('codemirror/mode/javascript/javascript', () => ({default: {}}));
jest.mock('codemirror/addon/lint/lint', () => ({default: {}}));
jest.mock('codemirror/addon/lint/json-lint', () => ({default: {}}));
jest.mock('codemirror/addon/edit/closebrackets', () => ({default: {}}));
jest.mock('codemirror/addon/edit/matchbrackets', () => ({default: {}}));
jest.mock('codemirror/addon/search/search', () => ({default: {}}));
jest.mock('codemirror/addon/search/searchcursor', () => ({default: {}}));
jest.mock('codemirror/addon/search/jump-to-line', () => ({default: {}}));
jest.mock('codemirror/addon/dialog/dialog', () => ({default: {}}));
jest.mock('codemirror/addon/display/autorefresh', () => ({default: {}}));
jest.mock('codemirror/addon/display/fullscreen', () => ({default: {}}));
jest.mock('codemirror', () => ({
  fromTextArea: () => ({
    on: () => {},
    setValue: () => {},
    setOption: () => {},
    addKeyMap: () => {}
  })
}));

describe('Editor tests', () => {
  it('Editor renders correctly', () => {
    const tree = renderer
      .create(
        <Editor/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});