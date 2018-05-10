import React from "react";
import renderer from "react-test-renderer";
import {BaseHelpModal} from "../HelpModal";

describe('HelpModal tests', () => {
  it('HelpModal renders correctly', () => {
    const tree = renderer
      .create(
        <BaseHelpModal isOpen={false} // https://github.com/reactjs/react-modal/issues/553
                       toggleModal={jest.fn()}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
