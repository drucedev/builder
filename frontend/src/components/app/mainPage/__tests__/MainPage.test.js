import React from "react";
import renderer from 'react-test-renderer';
import {BaseMainPage} from "../MainPage";
jest.mock('../../buttons/ImportButton');
jest.mock('../requests/Requests');
jest.mock('../methodForm/MethodForm');
describe('MainPage tests', () => {
  it('MainPage renders correctly', () => {
    const tree = renderer
      .create(<BaseMainPage currentUri={''} currentRequest={{}} currentRequests={{}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
