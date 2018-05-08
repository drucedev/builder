import renderer from "react-test-renderer";
import HelpPage from "../HelpPage";
import React from "react";

describe('HelpPage tests', () => {
  it('HelpPage renders correctly', () => {
    const tree = renderer
      .create(<HelpPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});