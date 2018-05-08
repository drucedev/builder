import React from "react";
import {MemoryRouter} from "react-router-dom";
import MethodDropdown from "../MethodDropdown";
import renderer from 'react-test-renderer';
import mockBuilder from "../../../../../__mocks__/mockBuilder";

describe('MethodDropdown tests', () => {
  it('MethodDropdown renders correctly', () => {
    const tree = renderer
      .create(
          <MemoryRouter initialEntries={['/']}>
            <MethodDropdown service={mockBuilder[0]}/>
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
