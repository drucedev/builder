import React from "react";
import renderer from 'react-test-renderer';
import {BaseSelectOption} from "../SelectOption";

describe('SelectOption tests', () => {
  it('SelectOption renders correctly', () => {
    const tree = renderer
      .create(
          <BaseSelectOption option={{}} changeSelected={jest.fn()} currentRequest={{}} currentUri={''}
                            deleteRequest={jest.fn()}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
