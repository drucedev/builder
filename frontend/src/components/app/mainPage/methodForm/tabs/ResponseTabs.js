import React from 'react';
import PropTypes from 'prop-types';
import Editor from "../editor/Editor";
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import './Tabs.css';

export default class ResponseTabs extends React.Component {
  render() {
    return (
      <Tabs className='tabs tabs-1'>
        <div className='tab-links'>
          <TabLink to='response'>Ответ</TabLink>
        </div>
        <div className='content'>
          <TabContent for='response'>
            <Editor value={this.props.response}
                    options={{readOnly: true}}/>
          </TabContent>
        </div>
      </Tabs>
    );
  }
};

ResponseTabs.propTypes = {
  response: PropTypes.string
};
