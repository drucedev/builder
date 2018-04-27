import {button, component, div, i, input} from "../../../elements";
import FgSavedMethodRequestsSelect from "./fgSavedMethodRequestsSelect/FgSavedMethodRequestsSelect";
import {editRequest, saveRequest,} from "../../../../actions/requests";
import {isDefaultRequest} from "../../../../selectors/select";
import {generateId} from "../../../../utils";
import config from "../../../../config";
import {connect} from 'react-redux';
import React from 'react';

class FgSavedMethodRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentRequestName: this.props.currentRequest.name};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentRequestName: nextProps.currentRequest.name});
  }

  render() {
    const {
      isDefault,
      currentRequest,
      currentUri,
      saveRequest,
      editRequest
    } = this.props;

    const {currentRequestName} = this.state;

    return div({},
      div({className: 'col-md-4 col-sm-4'},
        div({className: 'request-select'},
          component(FgSavedMethodRequestsSelect, {currentRequest, currentUri})
        )
      ),
      div({className: 'col-md-4 col-sm-4'},
        div({className: 'input-group pull-right'},
          input({
            className: 'form-control',
            type: 'text',
            value: currentRequestName,
            placeholder: 'Введите имя набора',
            onChange: e => this.setState({currentRequestName: e.target.value})
          }),
          div({className: 'input-group-btn'},
            button({
                disabled: isDefault,
                className: 'btn btn-default',
                onClick: () => editRequest(
                  currentUri, {
                    id: currentRequest.id,
                    name: currentRequestName
                  },
                )
              },
              i({
                className: 'glyphicon glyphicon-pencil',
                title: 'Переименовать набор'
              })
            ),
            button({
                className: 'btn btn-default',
                onClick: () => saveRequest(currentUri, {
                  id: generateId(),
                  name: this.state.currentRequestName || config.defaultRequestName,
                  value: currentRequest.value
                })
              },
              i({
                className: 'glyphicon glyphicon-plus',
                title: 'Добавить набор'
              })
            )
          )
        )
      )
    )
  }
}

export default connect(
  state => ({
    isDefault: isDefaultRequest(state)
  }),
  {
    saveRequest,
    editRequest
  }
)(FgSavedMethodRequests);
