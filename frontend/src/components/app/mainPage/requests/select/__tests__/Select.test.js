import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Select from "../Select";
jest.mock('../SelectOption');
jest.mock('../../../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../../../selectors/requests', () => ({
  getCurrentRequest: () => ({
    id: '1',
    name: 'test',
    value: '{}'
  }),
  getCurrentRequestsValues: () => [{
    id: '1',
    name: 'test',
    value: '{}'
  }]
}));
jest.mock('connected-react-router');
const store = configureStore()({
  requests: {}
});

describe('Select tests', () => {
  it('Select renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Select/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
