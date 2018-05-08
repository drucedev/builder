import React from "react";
import renderer from 'react-test-renderer';
import {BaseRequests} from "../Requests";

jest.mock('connected-react-router');
jest.mock('../select/Select');
describe('Requests tests', () => {
  it('Requests renders correctly', () => {
    const tree = renderer
      .create(
        <BaseRequests currentUri={''} currentRequest={{}} isDefaultRequest={false} editRequest={jest.fn()}
                      saveRequest={jest.fn()}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
