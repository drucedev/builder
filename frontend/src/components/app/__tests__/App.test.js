import React from "react";
import renderer from "react-test-renderer";
import App from "../App";
import {MemoryRouter} from "react-router-dom";

jest.mock('../helpPage/HelpPage');
jest.mock('../helpPage/modal/HelpModal');
jest.mock('../mainPage/MainPage');
jest.mock('../navbar/Navbar');
jest.mock('connected-react-router');
jest.mock('react-redux-toastr');

describe('App tests', () => {
  it('App renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <App/>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
