import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from "./SelectOption";
import {getCurrentRequest, getCurrentRequestsValues} from "../../../../../selectors/requests";
import {changeSelected} from "../../../../../actions/select";
import {connect} from 'react-redux';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import './Select.css'
import {getCurrentUri} from "../../../../../selectors/router";

export class BaseSelect extends React.Component {
  render() {
    const {currentUri, currentRequest, currentRequests, changeSelected} = this.props;
    return (
      <ReactSelect className='request-select'
                        autosize={false}
                        options={currentRequests}
                        clearable={false}
                        value={currentRequest}
                        labelKey='name'
                        onChange={(selected) => changeSelected(currentUri, selected.id)}
                        optionComponent={SelectOption}/>
    );
  }
}

BaseSelect.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object.isRequired,
  currentRequests: PropTypes.array.isRequired,
  changeSelected: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state),
  currentRequests: getCurrentRequestsValues(state)
});

const mapDispatchToProps = {
  changeSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseSelect);
