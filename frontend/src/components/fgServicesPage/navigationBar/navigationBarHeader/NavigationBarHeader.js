import {div, label, component} from "../../../elements";
import {Link} from 'react-router-dom';
import React from 'react';

export default class NavigationBarHeader extends React.Component {
  render() {
    return div({className: 'navbar-header'},
      label({className: 'navbar-brand'},
        component(Link, {to: '/'}, 'Api')
      )
    )
  }
}
