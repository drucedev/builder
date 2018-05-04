import React from "react";
import renderer from 'react-test-renderer';
import NavbarControls from "../NavbarControls";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore()({
  router: {location: {pathname: '/'}},
  requests: {}
});

describe('NavbarHeader tests', () => {
  it('NavbarHeader renders correctly', () => {
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
