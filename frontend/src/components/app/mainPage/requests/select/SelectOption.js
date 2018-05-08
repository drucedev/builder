import React from 'react';
import PropTypes from 'prop-types';
import {deleteRequest} from "../../../../../actions/requests";
import config from "../../../../../config";
import {connect} from 'react-redux';
import {getCurrentUri} from "../../../../../selectors/router";
import {getCurrentRequest} from "../../../../../selectors/requests";
import {changeSelected} from "../../../../../actions/select";

export class BaseSelectOption extends React.Component {
  handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  };

  handleMouseEnter = (event) => {
    this.props.onFocus(this.props.option, event);
  };

  handleMouseMove = (event) => {
    this.props.onFocus(this.props.option, event);
  };

  render() {
    const {
      option,
      deleteRequest,
      currentUri,
      currentRequest,
      changeSelected
    } = this.props;
    return (
      <div className={this.props.className} title={option.title}>
        <span onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}
             onMouseEnter={this.handleMouseEnter}>
          {option.name}
        </span>
        {
          option.id !== config.defaultRequestId &&
          <i role='button' className='glyphicon glyphicon-remove text-danger pull-right'
             onClick={() => {
               currentRequest.id === option.id && changeSelected(currentUri, config.defaultRequestId);
               deleteRequest(currentUri, option.id);
             }}/>
        }
      </div>
    );
  }
}

BaseSelectOption.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object.isRequired,
  changeSelected: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state)
});

const mapDispatchToProps = {
  changeSelected,
  deleteRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseSelectOption);
