import React from "react";
import renderer from 'react-test-renderer';
import {BaseNavbarControls} from "../NavbarControls";
jest.mock('../../buttons/ImportButton');

describe('NavbarControls tests', () => {
  it('NavbarControls renders correctly', () => {
    const tree = renderer
      .create(<BaseNavbarControls requests={{}} resetLocalStorage={jest.fn()} toggleModal={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
