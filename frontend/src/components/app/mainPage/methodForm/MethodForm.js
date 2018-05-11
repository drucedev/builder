import React from 'react';
import PropTypes from 'prop-types';
import RequestTabs from "./tabs/RequestTabs";
import ResponseTabs from "./tabs/ResponseTabs";
import {postRequest} from "../../../../actions/requests";
import {connect} from 'react-redux';
import './MethodForm.css';
import {getCurrentRequest} from "../../../../selectors/requests";
import {getCurrentUri} from "../../../../selectors/router";

export class BaseMethodForm extends React.Component {
  componentWillMount() {
    this.setState({response: ''});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {currentUri, currentRequest, postRequest} = this.props;
    postRequest(currentUri, currentRequest).then((response) => this.setState({response}));
  };

  render() {
    return (
      <form className='form-vertical' onSubmit={this.onSubmit}>
        <div className='row'>
          <div className='col-sm-6'>
            <RequestTabs/>
          </div>
          <div className='col-sm-6'>
            <ResponseTabs response={this.state.response}/>
          </div>
        </div>
        <div className='pull-right spacing'>
          <button className='btn btn-primary' type='submit'>Отправить</button>
        </div>
      </form>
    );
  }
}

BaseMethodForm.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object.isRequired,
  postRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state)
});

const mapDispatchToProps = {
  postRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseMethodForm);
