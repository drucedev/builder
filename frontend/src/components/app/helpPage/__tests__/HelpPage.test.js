import React from "react";
import renderer from "react-test-renderer";
import HelpPage from "../HelpPage";

describe('HelpPage tests', () => {
  it('HelpPage renders correctly', () => {
    const tree = renderer
      .create(
          <HelpPage/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});