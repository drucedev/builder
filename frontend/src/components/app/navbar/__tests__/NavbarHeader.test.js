import React from "react";
import renderer from 'react-test-renderer';
import NavbarHeader from "../NavbarHeader";
import {MemoryRouter} from "react-router-dom";

describe('NavbarHeader tests', () => {
  it('NavbarHeader renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <NavbarHeader/>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
