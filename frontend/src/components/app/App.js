import React from "react";
import HelpPage from "./helpPage/HelpPage";
import MainPage from "./mainPage/MainPage";
import Navbar from "./navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import ReduxToastr from "react-redux-toastr";
import HelpModal from "./helpPage/modal/HelpModal";
import Loader from "./loader/Loader";

export default class App extends React.Component {
  render() {
    return (
      <section id='app-component'>
        <Navbar/>
        <ReduxToastr/>
        <HelpModal/>
        <Loader/>
        <Switch>
          <Route path='/:serviceName/:methodName' component={MainPage}/>
          <Route path='/' component={HelpPage}/>
        </Switch>
      </section>
    );
  }
}
