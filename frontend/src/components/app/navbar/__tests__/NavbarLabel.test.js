import React from "react";
import renderer from 'react-test-renderer';
import {BaseNavbarLabel} from "../NavbarLabel";

describe('NavbarLabel tests', () => {
  it('NavbarLabel renders correctly', () => {
    const tree = renderer
      .create(<BaseNavbarLabel currentUri={''}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
