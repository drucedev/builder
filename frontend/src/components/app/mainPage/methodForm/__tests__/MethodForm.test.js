import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MethodForm from "../MethodForm";

jest.mock('connected-react-router');
jest.mock('../tabs/RequestTabs');
jest.mock('../tabs/ResponseTabs');
jest.mock('../../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../../selectors/requests', () => ({
  getCurrentRequest: () => ({
    id: '1',
    name: 'test',
    value: '{}'
  })
}));
const store = configureStore()({});

describe('MethodForm tests', () => {
  it('MethodForm renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MethodForm/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

