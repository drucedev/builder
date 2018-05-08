import React from 'react';
import PropTypes from 'prop-types';
import Select from "./select/Select";
import {editRequest, saveRequest} from "../../../../actions/requests";
import {generateId} from "../../../../utils";
import config from "../../../../config";
import {connect} from 'react-redux';
import {isDefaultRequest} from "../../../../selectors/select";
import {getCurrentRequest} from "../../../../selectors/requests";
import {getCurrentUri} from "../../../../selectors/router";

export class BaseRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentRequestName: this.props.currentRequest.name};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentRequestName: nextProps.currentRequest.name});
  }

  render() {
    const {currentRequest, currentUri, isDefaultRequest, saveRequest, editRequest} = this.props;

    const {currentRequestName} = this.state;

    return (
      <div>
        <div className='col-md-4 col-sm-4'>
          <Select/>
        </div>
        <div className='col-md-4 col-sm-4'>
          <div className='input-group pull-right'>
            <input className='form-control' type='text' value={currentRequestName} placeholder='Введите имя набора'
                   onChange={(e) => this.setState({currentRequestName: e.target.value})}/>
            <div className='input-group-btn'>
              <button className='btn btn-default'
                      disabled={isDefaultRequest}
                      onClick={() => editRequest({
                        id: currentRequest.id,
                        uri: currentUri,
                        name: currentRequestName
                      })}>
                <i className='glyphicon glyphicon-pencil' title='Переименовать набор'/>
              </button>
              <button className='btn btn-default'
                      onClick={() => saveRequest({
                        id: generateId(),
                        uri: currentUri,
                        name: this.state.currentRequestName || config.defaultRequestName,
                        value: currentRequest.value
                      })}>
                <i className='glyphicon glyphicon-plus' title='Добавить набор'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BaseRequests.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object.isRequired,
  isDefaultRequest: PropTypes.bool.isRequired,
  saveRequest: PropTypes.func.isRequired,
  editRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state),
  isDefaultRequest: isDefaultRequest(state)
});

const mapDispatchToProps = {
  saveRequest,
  editRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseRequests);
