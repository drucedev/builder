import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import RequestTabs from "../RequestTabs";

jest.mock('connected-react-router');
jest.mock('../../editor/Editor');
jest.mock('../../../../../../selectors/editor', () => ({isFullScreenMode: () => false}));
jest.mock('../../../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../../../selectors/tabs', () => ({getSelectedTab: () => 'value'}));
jest.mock('../../../../../../selectors/select', () => ({isDefaultRequest: () => false}));
jest.mock('../../../../../../selectors/requests', () => ({
  getDefaultRequestSchema: () => '{}',
  getCurrentRequest: () => ({
    id: '1',
    name: 'test',
    value: '{}'
  })
}));
const store = configureStore()({});

describe('RequestTabs tests', () => {
  it('RequestTabs renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RequestTabs/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
