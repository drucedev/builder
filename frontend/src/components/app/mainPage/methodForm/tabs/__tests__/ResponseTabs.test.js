import React from "react";
import renderer from 'react-test-renderer';
import ResponseTabs from "../ResponseTabs";

jest.mock('../../editor/Editor');

describe('ResponseTabs tests', () => {
  it('ResponseTabs renders correctly', () => {
    const tree = renderer
      .create(<ResponseTabs response={''}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

