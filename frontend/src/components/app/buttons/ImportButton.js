import React from 'react';
import PropTypes from 'prop-types';
import {importRequests} from "../../../actions/requests";
import {readJsonFile} from "../../../utils";
import {toastr} from "react-redux-toastr";
import {connect} from "react-redux";

export class BaseImportButton extends React.Component {
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

BaseImportButton.propTypes = {
  importRequests: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  importRequests
};

export default connect(null, mapDispatchToProps)(BaseImportButton);
