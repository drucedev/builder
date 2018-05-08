import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import SelectOption from "../SelectOption";

jest.mock('../../../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../../../selectors/requests', () => ({getCurrentRequest: () => ({}),}));
jest.mock('connected-react-router');
const store = configureStore()({});

describe('SelectOption tests', () => {
  it('SelectOption renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SelectOption option={{
            id: 'default',
            name: 'default',
            value: '{}',
            schema: '{}'
          }}/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
