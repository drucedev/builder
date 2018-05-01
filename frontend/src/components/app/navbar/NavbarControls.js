import React from "react";
import PropTypes from 'prop-types';
import {exportAllRequests, importRequests, resetLocalStorage} from "../../../actions/requests";
import {connect} from 'react-redux';
import './Navbar.css';

class NavbarControls extends React.Component {
  render() {
    const {importRequests, exportAllRequests, resetLocalStorage} = this.props;

    return (
      <li>
        <div className='btn-group'>
          <label className='btn btn-primary'>
            <input className='hidden' type='file' onChange={(e) => importRequests(e.target.files[0])}/>
            Загрузить из файла
          </label>
          <button className='btn btn-primary' type='button' onClick={exportAllRequests}>
            Сохранить в файл
          </button>
        </div>
        <button className='btn btn-danger btn-margin-left' type='button' onClick={resetLocalStorage}>
          Сбросить всё
        </button>
      </li>
    );
  }
}

NavbarControls.propTypes = {
  resetLocalStorage: PropTypes.func.isRequired,
  exportAllRequests: PropTypes.func.isRequired,
  importRequests: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  resetLocalStorage,
  exportAllRequests,
  importRequests
};

export default connect(null, mapDispatchToProps)(NavbarControls);
