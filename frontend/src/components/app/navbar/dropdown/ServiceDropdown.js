import React from 'react';
import PropTypes from 'prop-types';
import MethodDropdown from "./MethodDropdown";
import {fetchBuilder} from "../../../../actions/requests";
import {connect} from 'react-redux';
import {Dropdown} from 'bootstrap.native';

class ServiceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {services: []};
  }

  componentWillMount() {
    this.props.fetchBuilder().then((services) => this.setState({services}));
  }

  componentDidMount() {
    const dropdown = document.getElementById('service');
    !!dropdown && new Dropdown(dropdown, {persist: true});
  }

  render() {
    const methodDropdowns = this.state.services.map((service, i) => <MethodDropdown key={i} service={service}/>);
    return (
      <li className='dropdown'>
        <a className='dropdown-toggle' id='service' role='button'>
          Сервисы
          <span className='caret'/>
        </a>
        <ul className='dropdown-menu' role='menu'>
          {methodDropdowns}
        </ul>
      </li>
    );
  }
}

ServiceDropdown.propTypes = {
  fetchBuilder: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchBuilder
};

export default connect(null, mapDispatchToProps)(ServiceDropdown);
