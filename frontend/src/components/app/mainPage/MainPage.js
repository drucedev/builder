import React from 'react';
import PropTypes from 'prop-types';
import Requests from "./requests/Requests";
import MethodForm from "./methodForm/MethodForm";
import {connect} from 'react-redux';
import {getCurrentUri} from "../../../selectors/router";
import {getCurrentRequest, getCurrentRequests} from "../../../selectors/requests";
import ImportButton from "../buttons/ImportButton";
import {saveJsonFile} from "../../../utils";

export class BaseMainPage extends React.Component {
  onExport = () => {
    const {currentUri, currentRequests} = this.props;
    saveJsonFile(currentUri, currentRequests);
  };

  render() {
    if (!this.props.currentRequest) {
      return <div/>
    }
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
                       onClick={this.onExport}/>
                  </button>
                  <label className='btn btn-default' title='Загрузить наборы'>
                    <i className='glyphicon glyphicon-upload'/>
                    <ImportButton/>
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

BaseMainPage.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequests: PropTypes.object.isRequired,
  currentRequest: PropTypes.object
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state),
  currentRequests: getCurrentRequests(state)
});

export default connect(mapStateToProps)(BaseMainPage);
