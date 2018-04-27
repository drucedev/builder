import {button, component, div, form} from "../../../elements";
import FgMethodRequestTabs from "./fgMethodRequestTabs/FgMethodRequestTabs";
import FgMethodResponseTabs from "./fgMethodResponseTabs/FgMethodResponseTabs";
import {postRequest} from "../../../../actions/requests";
import {connect} from 'react-redux';
import React from 'react';

class FgMethodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: ''};
  }

  render() {
    const {
      currentRequest,
      postRequest,
      currentUri
    } = this.props;
    return form({
        className: 'form-vertical',
        onSubmit: (e) => {
          e.preventDefault();
          postRequest(currentUri, currentRequest).then(response => {
            this.setState({response});
          });
        }
      },
      div({className: 'row'},
        div({className: 'col-sm-6'},
          component(FgMethodRequestTabs, {currentRequest}),
        ),
        div({className: 'col-sm-6'},
          component(FgMethodResponseTabs, {response: this.state.response})
        )
      ),
      div({className: 'pull-right spacing'},
        button({
            className: 'btn btn-primary btn-primary-spacing',
            type: 'submit'
          },
          'Отправить'
        )
      )
    )
  }
}

export default connect(
  null,
  {
    postRequest
  }
)(FgMethodForm);
