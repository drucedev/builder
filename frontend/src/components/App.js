import FgServicesPage from "./fgServicesPage/FgServicesPage";
import {component, div} from "./elements";
import React from "react";

export default class App extends React.Component {
  render() {
    return div({id: 'app-component'},
      component(FgServicesPage)
    )
  }
}
