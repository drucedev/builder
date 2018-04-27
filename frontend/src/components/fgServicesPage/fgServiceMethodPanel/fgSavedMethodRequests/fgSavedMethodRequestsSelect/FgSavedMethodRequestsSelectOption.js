import {div, i, span} from "../../../../elements";
import {deleteRequest} from "../../../../../actions/requests";
import config from "../../../../../config";

import {connect} from 'react-redux';
import React from 'react';

class FgSavedMethodRequestsSelectOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  }

  handleMouseEnter(event) {
    this.props.onFocus(this.props.option, event);
  }

  handleMouseMove(event) {
    this.props.onFocus(this.props.option, event);
  }

  render() {
    const {
      option,
      deleteRequest,
      currentUri,
      currentRequest,
      changeSelected
    } = this.props;
    return div({
        className: this.props.className,
        title: option.title
      },
      span({
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseEnter: this.handleMouseEnter
        },
        option.name,
      ),
      option.id !== config.defaultRequestId && i({
        role: 'button',
        className: 'glyphicon glyphicon-remove text-danger pull-right',
        onClick: () => {
          currentRequest.id === option.id && changeSelected(currentUri, config.defaultRequestId);
          deleteRequest(currentUri, option.id);
        }
      })
    )

  }
}

export default connect(
  null,
  {
    deleteRequest
  }
)(FgSavedMethodRequestsSelectOption)
