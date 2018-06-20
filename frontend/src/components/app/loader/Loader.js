import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {isLoading} from "../../../selectors/loader";
import {ClipLoader} from "react-spinners";
import './Loader.css';

export class BaseLoader extends React.Component {
  render() {
    const loader = (
      <div className='overlay'>
        <div className='loader'>
          <ClipLoader size='50'/>
        </div>
      </div>
    );
    return this.props.isLoading && loader;
  }
}

const mapStateToProps = (state) => ({
  isLoading: isLoading(state)
});

BaseLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, null)(BaseLoader);
