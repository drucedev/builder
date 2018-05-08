import React from "react";
import {BaseServiceDropdown} from "../ServiceDropdown";
import renderer from 'react-test-renderer';

describe('ServiceDropdown tests', () => {
  it('ServiceDropdown renders correctly', () => {
    const tree = renderer
      .create(<BaseServiceDropdown fetchBuilder={jest.fn().mockReturnValue(Promise.resolve([]))}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
