import React from "react";
import renderer from 'react-test-renderer';
import NavbarControls from "../NavbarControls";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore()({
  requests: {}
});

describe('NavbarControls tests', () => {
  it('NavbarControls renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavbarControls/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
});
