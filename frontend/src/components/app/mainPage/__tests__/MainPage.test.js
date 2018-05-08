import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import MainPage from "../MainPage";

jest.mock('../../buttons/ImportButton');
jest.mock('../requests/Requests');
jest.mock('../methodForm/MethodForm');
jest.mock('../../../../selectors/router', () => ({getCurrentUri: () => '/service/method'}));
jest.mock('../../../../selectors/requests', () => ({
  getCurrentRequest: () => ({id: '1', name: 'test', value: '{}'}),
  getCurrentRequests: () => ({})
}));
jest.mock('connected-react-router');
const store = configureStore()({});

describe('MainPage tests', () => {
  it('MainPage renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MainPage/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

