import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MemoryRouter} from "react-router-dom";

jest.mock('../helpPage/HelpPage');
jest.mock('../mainPage/MainPage');
jest.mock('../navbar/Navbar');
jest.mock('connected-react-router');
jest.mock('react-redux-toastr');

describe('App tests', () => {
  it('App renders correctly', () => {
    const store = configureStore()({});
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App/>
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
