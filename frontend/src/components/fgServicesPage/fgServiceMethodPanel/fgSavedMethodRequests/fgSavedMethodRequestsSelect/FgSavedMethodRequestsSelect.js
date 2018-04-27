import FgSavedMethodRequestsSelectOption from "./FgSavedMethodRequestsSelectOption";
import {component} from "../../../../elements";
import {getCurrentRequestsValues} from "../../../../../selectors/requests";
import {changeSelected} from "../../../../../actions/select";
import {connect} from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React from 'react';

class FgSavedMethodRequestsSelect extends React.Component {
  render() {
    const {
      currentRequest,
      currentRequests,
      changeSelected,
      currentUri,
    } = this.props;
    return component(Select, {
      autosize: false,
      options: currentRequests,
      clearable: false,
      value: currentRequest,
      labelKey: 'name',
      onChange: selected => changeSelected(currentUri, selected.id),
      optionComponent: (props) => component(FgSavedMethodRequestsSelectOption, {
        currentUri,
        currentRequest,
        changeSelected,
        ...props
      })
    })
  }
}

export default connect(
  state => ({
    currentRequests: getCurrentRequestsValues(state)
  }),
  {
    changeSelected
  }
)(FgSavedMethodRequestsSelect)
