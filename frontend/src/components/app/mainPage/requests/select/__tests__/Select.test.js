import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Select from "../Select";

const store = configureStore()({
  router: {location: {pathname: '/service1/method1'}},
  requests: {
    '/service1/method1': {
      'default': {
        id: 'default',
        name: 'default',
        value: 'test',
        schema: 'test'
      }
    }
  },
  select: {}
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
