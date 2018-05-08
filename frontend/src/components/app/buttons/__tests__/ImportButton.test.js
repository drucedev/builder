import React from "react";
import renderer from "react-test-renderer";
import ImportButton from "../ImportButton";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

describe('ImportButton tests', () => {
  it('ImportButton renders correctly', () => {
    const store = configureStore()({});
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
