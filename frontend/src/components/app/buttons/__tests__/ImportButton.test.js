import React from "react";
import renderer from "react-test-renderer";
import ImportButton from "../ImportButton";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore()({});


describe('HelpPage tests', () => {
  it('HelpPage renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ImportButton/>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
