import React from "react";
import renderer from 'react-test-renderer';
import {BaseSelect} from "../Select";
jest.mock('../SelectOption');

describe('Select tests', () => {
  it('Select renders correctly', () => {
    const tree = renderer
      .create(
          <BaseSelect currentUri={''} currentRequest={{}} currentRequests={[]} changeSelected={jest.fn()}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
