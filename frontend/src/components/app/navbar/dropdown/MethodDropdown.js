import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Dropdown} from 'bootstrap.native';
import {encodeUri} from "../../../../utils";

export default class MethodDropdown extends React.Component {
  componentDidMount() {
    document.getElementsByName('method').forEach((dropdown) => new Dropdown(dropdown, {persist: true}));
  }

  render() {
    const {service} = this.props;

    const methodLinks = service.methods.map((method, i) => (
      <li key={i} role='presentation'>
        <Link role='menuitem' to={encodeUri(`/${service.name}/${method.name}`)}>{method.name}</Link>
      </li>
    ));

    return (
      <li role='presentation'>
        <a name='method' role='button' data-toggle='dropdown'>
          {service.name}
          <span className='caret'/>
        </a>
        <ul className='dropdown-menu pull-right' role='menu'>
          {methodLinks}
        </ul>
      </li>
    );

  }
}

MethodDropdown.propTypes = {
  service: PropTypes.object.isRequired
};
