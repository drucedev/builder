import {button, div, input, label, li} from "../../../elements";
import {exportAllRequests, importRequests, resetLocalStorage} from "../../../../actions/requests";
import React from "react";
import {connect} from 'react-redux';

class NavigationBarSetControls extends React.Component {
  render() {
    const {
      importRequests,
      exportAllRequests,
      resetLocalStorage
    } = this.props;

    return li({},
      div({className: 'btn-group'},
        label({
            className: 'btn btn-primary',
          },
          input({
            style: {display: 'none'},
            type: 'file',
            onChange: (e) => importRequests(e.target.files[0])
          }),
          'Загрузить из файла'
        ),
        button({
            className: 'btn btn-primary',
            type: 'button',
            onClick: exportAllRequests
          },
          'Сохранить в файл'
        )
      ),
      button({
          className: 'btn btn-danger btn-margin-left',
          type: 'button',
          onClick: resetLocalStorage
        },
        'Сбросить всё'
      )
    )
  }
}

export default connect(
  null,
  {
    resetLocalStorage,
    exportAllRequests,
    importRequests
  }
)(NavigationBarSetControls);
