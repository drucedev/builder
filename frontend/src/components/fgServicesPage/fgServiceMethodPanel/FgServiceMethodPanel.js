import {b, button, component, div, i, input, label} from "../../elements";
import FgSavedMethodRequests from "./fgSavedMethodRequests/FgSavedMethodRequests";
import FgMethodForm from "./fgMethodForm/FgMethodForm";
import {
  exportRequests,
  fetchBuilder,
  importRequests
} from "../../../actions/requests";
import {getCurrentRequest} from "../../../selectors/requests";
import {getCurrentUri} from "../../../selectors/router";
import {connect} from 'react-redux';
import React from 'react';

class FgServiceMethodPanel extends React.Component {
  render() {
    const {currentRequest, currentUri, exportRequests, importRequests} = this.props;
    if (!currentRequest) {
      return div();
    }
    return div({className: 'container-fluid'},
      div({className: 'panel panel-default'},
        div({className: 'panel-heading'},
          div({className: 'row'},
            div({className: 'col-md-4 col-sm-4'},
              b({}, 'Выберите тестовый запрос:')
            ),
            div({className: 'col-md-4 col-sm-4'},
              b({}, 'Добавление запроса в список:')
            )
          ),
          div({className: 'row'},
            component(FgSavedMethodRequests, {currentRequest, currentUri}),
            div({className: 'col-md-2 col-md-offset-2 col-sm-3 col-sm-offset-1'},
              div({className: 'btn-group pull-right', style: {display: 'inline-block'}},
                button({className: 'btn btn-default'},
                  i({
                    role: 'button',
                    className: 'glyphicon glyphicon-download',
                    title: 'Скачать наборы',
                    onClick: () => exportRequests(currentUri)
                  })
                ),
                label({
                    title: 'Загрузить наборы',
                    className: 'btn btn-default'
                  },
                  i({className: 'glyphicon glyphicon-upload'}),
                  input({
                    style: {display: 'none'},
                    type: 'file',
                    onChange: (e) => importRequests(e.target.files[0])
                  })
                )
              )
            )
          )
        ),
        div({className: 'panel-body'},
          component(FgMethodForm, {currentRequest, currentUri})
        )
      )
    )
  }
}

export default connect(
  state => ({
    currentUri: getCurrentUri(state),
    currentRequest: getCurrentRequest(state)
  }),
  {
    fetchBuilder,
    exportRequests,
    importRequests
  }
)(FgServiceMethodPanel)
