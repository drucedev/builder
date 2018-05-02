import React from 'react';
import PropTypes from 'prop-types';
import {importRequests} from "../../../actions/requests";
import {readJsonFile} from "../../../utils";
import {toastr} from "react-redux-toastr";
import {connect} from "react-redux";

class ImportButton extends React.Component {
  onImportRequests = (e) => {
    const file = e.target.files[0];
    readJsonFile(file)
      .then(this.props.importRequests)
      .catch(err => toastr.error('Ошибка', err.message));
  };

  render() {
    return <input className='hidden' type='file' onChange={this.onImportRequests}/>
  }
}

ImportButton.propTypes = {
  importRequests: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  importRequests
};

export default connect(null, mapDispatchToProps)(ImportButton);
