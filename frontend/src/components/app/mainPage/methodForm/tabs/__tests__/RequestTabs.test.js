import React from "react";
import renderer from 'react-test-renderer';
import {BaseRequestTabs} from "../RequestTabs";

jest.mock('../../editor/Editor');

describe('RequestTabs tests', () => {
  it('RequestTabs renders correctly', () => {
    const tree = renderer
      .create(
        <BaseRequestTabs currentUri={''} currentRequest={{}} changeSelected={jest.fn()} editRequest={jest.fn()}
                         isDefaultRequest={false} isFullScreenMode={false} toggleFullScreenMode={jest.fn()}
                         requestSchema={''} selectedTab={''}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
