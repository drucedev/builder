import {a, li, span, ul, component} from "../../../elements";
import {Link} from 'react-router-dom';
import {Dropdown} from 'bootstrap.native';
import React from 'react';

export default class NavigationBarDropdownSubMenu extends React.Component {
  componentDidMount() {
    document.getElementsByName('method').forEach(dropdown => new Dropdown(dropdown, {persist: true}));
  }

  render() {
    const {service} = this.props;

    return li({
        className: 'dropdown-submenu',
        role: 'presentation'
      },
      a({
          name: 'method',
          role: 'menuitem',
          href: '#',
          'data-toggle': 'dropdown'
        },
        service.name + ' ',
        span({className: 'caret'})
      ),
      ul({
          className: 'dropdown-menu pull-right',
          role: 'menu'
        },
        service.methods.map(method => {
          return li({role: 'presentation'},
            component(Link, {
                role: 'menuitem',
                to: `/${service.name}/${method.name}`
              },
              method.name
            )
          )
        })
      )
    )
  }
}
