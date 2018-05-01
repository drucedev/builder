import {Link} from 'react-router-dom';
import React from 'react';

export default class NavbarHeader extends React.Component {
  render() {
    return (
      <div className='navbar-header'>
        <label className='navbar-brand'>
          <Link to='/'>Api</Link>
        </label>
      </div>
    );
  }
}
