import React from "react";
import {MemoryRouter} from "react-router-dom";
import MethodDropdown from "../MethodDropdown";
import renderer from 'react-test-renderer';
import mockBuilder from "../../../../../actions/__mocks__/mockBuilder";
import mockDocument from "../__mocks__/mockDocument";

describe('MethodDropdown tests', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'getElementsByName', {
      value: mockDocument.getElementsByName
    });
  });

  it('MethodDropdown renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <MethodDropdown service={mockBuilder[0]}/>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
