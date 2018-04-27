import {component, div, nav, ul} from '../../elements';
import NavigationDropdown from './navigationBarDropdown/NavigationBarDropdown';
import NavigationBarHeader from './navigationBarHeader/NavigationBarHeader';
import NavigationBarSetControls from './navigationBarSetControls/NavigationBarSetControls'
import NavigationBarLabel from './navigationBarLabel/NavigationBarLabel'
import React from "react";

export default class NavigationBar extends React.Component {
  render() {
    return nav({className: 'navbar navbar-default'},
      div({className: 'container-fluid'},
        component(NavigationBarHeader),
        div({className: 'collapse navbar-collapse'},
          ul({className: 'nav navbar-nav'},
            component(NavigationDropdown)
          ),
          ul({className: 'nav navbar-nav'},
            component(NavigationBarLabel)
          ),
          ul({className: 'nav navbar-nav navbar-right navbar-center-element'},
            component(NavigationBarSetControls)
          )
        )
      )
    )
  }
}
