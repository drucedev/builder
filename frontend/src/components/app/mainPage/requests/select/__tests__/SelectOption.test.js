import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SelectOption from "../SelectOption";

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

describe('SelectOption tests', () => {
  it('SelectOption renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SelectOption option={{
            id: 'default',
            name: 'default',
            value: 'test',
            schema: 'test'
          }}/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
