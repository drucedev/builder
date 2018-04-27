import {component, div} from "../elements";
import NavigationBar from "./navigationBar/NavigationBar";
import FgServiceMethodPanel from "./fgServiceMethodPanel/FgServiceMethodPanel";
import HelpPage from "./helpPage/HelpPage";
import {Switch, Route} from 'react-router-dom';
import React from 'react';

export default class FgServicesPage extends React.Component {
  render() {
    return div({},
      component(NavigationBar),
      component(Switch, {},
        component(Route, {path: '/:fgServiceName/:fgMethodName', component: FgServiceMethodPanel}),
        component(Route, {path: '/', component: HelpPage})
      )
    )
  }
}
