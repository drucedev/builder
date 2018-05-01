import React from 'react';
import PropTypes from 'prop-types';
import {getCurrentUri} from "../../../selectors/router";
import {connect} from "react-redux";

class NavbarLabel extends React.Component {
  render() {
    return (
      <li>
        <a>{this.props.currentUri}</a>
      </li>
    );
  }
}

NavbarLabel.propTypes = {
  currentUri: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state)
});

export default connect(mapStateToProps)(NavbarLabel)
