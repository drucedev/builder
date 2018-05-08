import React from "react";
import renderer from 'react-test-renderer';
import {BaseMethodForm} from "../MethodForm";
jest.mock('connected-react-router');
jest.mock('../tabs/RequestTabs');
jest.mock('../tabs/ResponseTabs');

describe('MethodForm tests', () => {
  it('MethodForm renders correctly', () => {
    const tree = renderer
      .create(<BaseMethodForm currentUri={''} currentRequest={{}} postRequest={jest.fn()}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
