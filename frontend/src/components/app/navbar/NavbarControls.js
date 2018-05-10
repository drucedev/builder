import React from "react";
import PropTypes from 'prop-types';
import {resetLocalStorage} from "../../../actions/requests";
import {connect} from 'react-redux';
import './Navbar.css';
import ImportButton from "../buttons/ImportButton";
import {saveJsonFile} from "../../../utils";
import {toggleModal} from "../../../actions/modal";

export class BaseNavbarControls extends React.Component {
  onExportAll = () => {
    saveJsonFile('requests', this.props.requests);
  };

  render() {
    const {resetLocalStorage, toggleModal} = this.props;

    return (
      <li>
        <div className='btn-group'>
          <label className='btn btn-primary'>
            <ImportButton/>
            Загрузить из файла
          </label>
          <button className='btn btn-primary' type='button' onClick={this.onExportAll}>
            Сохранить в файл
          </button>
        </div>
        <button className='btn btn-info btn-margin-left' type='button' onClick={() => toggleModal('help')}>
          Помощь
        </button>
        <button className='btn btn-danger btn-margin-left' type='button' onClick={resetLocalStorage}>
          Сбросить всё
        </button>
      </li>
    );
  }
}

BaseNavbarControls.propTypes = {
  requests: PropTypes.object.isRequired,
  resetLocalStorage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({requests}) => ({requests});

const mapDispatchToProps = {
  resetLocalStorage,
  toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseNavbarControls);
