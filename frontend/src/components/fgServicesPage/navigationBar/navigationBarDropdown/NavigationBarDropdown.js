import {a, component, li, span, ul} from "../../../elements";
import NavigationBarDropdownSubMenu from "./NavigationBarDropdownSubMenu";
import {fetchBuilder} from "../../../../actions/requests";
import {connect} from 'react-redux';
import React from 'react';
import {Dropdown} from 'bootstrap.native';

class NavigationBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fgServices: []};
  }

  componentWillMount() {
    this.props.fetchBuilder().then(fgServices => {
      this.setState({fgServices});
    })
  }

  componentDidMount() {
    new Dropdown(document.getElementById('service'), {persist: true});
  }

  render() {
    return li({className: 'dropdown'},
      a({
          id: 'service',
          role: 'button',
          className: 'dropdown-toggle',
          href: '#',
        },
        'Сервисы ',
        span({className: 'caret'})
      ),
      ul({
          className: 'dropdown-menu',
          role: 'menu'
        },
        this.state.fgServices.map(service => {
          return component(NavigationBarDropdownSubMenu, {service})
        })
      )
    )
  }
}

export default connect(
  null,
  {
    fetchBuilder
  }
)(NavigationBarDropdown);
