import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentUri} from "../../../selectors/router";
import {connect} from "react-redux";

export class BaseNavbarLabel extends React.Component {
  render() {
    return (
      <li>
        <a>{this.props.currentUri}</a>
      </li>
    );
  }
}

BaseNavbarLabel.propTypes = {
  currentUri: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state)
});

export default connect(mapStateToProps)(BaseNavbarLabel)
