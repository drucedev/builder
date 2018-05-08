import React from "react";
import renderer from 'react-test-renderer';
import ResponseTabs from "../ResponseTabs";

jest.mock('../../editor/Editor');
jest.mock('../../../../../../selectors/editor', () => ({isFullScreenMode: () => false}));

describe('ResponseTabs tests', () => {
  it('ResponseTabs renders correctly', () => {
    const tree = renderer
      .create(<ResponseTabs/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

