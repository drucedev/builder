import React from "react";
import ServiceDropdown from './dropdown/ServiceDropdown';
import NavbarHeader from './NavbarHeader';
import NavbarControls from './NavbarControls'
import NavbarLabel from './NavbarLabel'
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <NavbarHeader/>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <ServiceDropdown/>
            </ul>
            <ul className='nav navbar-nav'>
              <NavbarLabel/>
            </ul>
            <ul className='nav navbar-nav navbar-right navbar-center-element'>
              <NavbarControls/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
