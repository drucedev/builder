import React from 'react';
import HelpContent from "./HelpContent";

export default class HelpPage extends React.Component {
  render() {
    return (
      <div className='container'>
        <h4>Горячие клавиши редактора запросов</h4>
        <HelpContent/>
      </div>
    )
  }
}
