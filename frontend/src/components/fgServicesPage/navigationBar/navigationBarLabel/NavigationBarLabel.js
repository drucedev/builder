import {a, li} from "../../../elements";
import {getCurrentUri} from "../../../../selectors/router";
import {connect} from 'react-redux';
import React from 'react';

class NavigationBarLabel extends React.Component {
  render() {
    const {currentUri} = this.props;

    return li({},
      a({}, currentUri)
    )
  }
}

export default connect(
  state => ({
    currentUri: getCurrentUri(state)
  })
)(NavigationBarLabel)
