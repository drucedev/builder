import React from "react";
import {MemoryRouter} from "react-router-dom";
import MethodDropdown from "../MethodDropdown";
import renderer from 'react-test-renderer';

describe('MethodDropdown tests', () => {
  it('MethodDropdown renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <MethodDropdown service={{methods: []}}/>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
