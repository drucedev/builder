import React from 'react';
import PropTypes from 'prop-types';
import Requests from "./requests/Requests";
import MethodForm from "./methodForm/MethodForm";
import {
  exportRequests,
  importRequests
} from "../../../actions/requests";
import {connect} from 'react-redux';
import {getCurrentUri} from "../../../selectors/router";
import {getCurrentRequest} from "../../../selectors/requests";

class MainPage extends React.Component {
  render() {
    if (!this.props.currentRequest) {
      return <div/>
    }
    const {currentUri, exportRequests, importRequests} = this.props;
    return (
      <div className='container-fluid'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <div className='row'>
              <div className='col-md-4 col-sm-4'>
                <b>Выберите тестовый запрос:</b>
              </div>
              <div className='col-md-4 col-sm-4'>
                <b>Добавление запроса в список:</b>
              </div>
            </div>
            <div className='row'>
              <Requests/>
              <div className='col-md-2 col-md-offset-2 col-sm-3 col-sm-offset-1'>
                <div className='btn-group pull-right visible-md-inline-block'>
                  <button className='btn btn-default'>
                    <i className='glyphicon glyphicon-download' role='button' title='Скачать наборы'
                       onClick={() => exportRequests(currentUri)}/>
                  </button>
                  <label className='btn btn-default' title='Загрузить наборы'>
                    <i className='glyphicon glyphicon-upload'/>
                    <input className='hidden' type='file' onChange={(e) => importRequests(e.target.files[0])}/>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='panel-body'>
            <MethodForm/>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object,
  exportRequests: PropTypes.func.isRequired,
  importRequests: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state)
});

const mapDispatchToProps = {
  exportRequests,
  importRequests
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
