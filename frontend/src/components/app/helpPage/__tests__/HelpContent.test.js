import React from "react";
import renderer from "react-test-renderer";
import HelpContent from "../HelpContent";

describe('HelpContent tests', () => {
  it('HelpContent renders correctly', () => {
    const tree = renderer
      .create(<HelpContent/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});