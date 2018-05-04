import React from "react";
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NavbarLabel from "../NavbarLabel";

const store = configureStore()({
  router: {location: {pathname: '/service1/method1'}},
  requests: {}
});

describe('NavbarLabel tests', () => {
  it('NavbarLabel renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <NavbarLabel/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});

