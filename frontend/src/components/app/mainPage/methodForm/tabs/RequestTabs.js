import React from 'react';
import PropTypes from 'prop-types';
import Editor from "../editor/Editor";
import {connect} from 'react-redux';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import {getCurrentRequest, getDefaultRequestSchema} from "../../../../../selectors/requests";
import {isFullScreenMode} from "../../../../../selectors/editor";
import {getSelectedTab} from "../../../../../selectors/tabs";
import {isDefaultRequest} from "../../../../../selectors/select";
import {changeSelected} from "../../../../../actions/tabs";
import {toggleFullScreenMode} from "../../../../../actions/editor";
import {editRequest} from '../../../../../actions/requests';
import './Tabs.css';
import {getCurrentUri} from "../../../../../selectors/router";

export class BaseRequestTabs extends React.Component {
  render() {
    const {
      currentRequest, currentUri, isDefaultRequest,
      requestSchema, changeSelected, toggleFullScreenMode,
      isFullScreenMode, selectedTab, editRequest
    } = this.props;
    return (
      <Tabs className='tabs tabs-1' selectedTab={selectedTab}
            handleSelect={(tab) => changeSelected(tab, currentUri, currentRequest.id)}>
        <div className='tab-links'>
          <TabLink to='value'>Запрос</TabLink>
          <TabLink to='schema'>Описание параметров</TabLink>
        </div>
        <div className='content'>
          <TabContent for='value'>
            <Editor value={currentRequest.value}
                    onChange={(value) => editRequest({id: currentRequest.id, uri: currentUri, value})}
                    onToggleFullScreenMode={toggleFullScreenMode}
                    options={{
                      lint: true,
                      autoCloseBrackets: true,
                      readOnly: isDefaultRequest,
                      fullScreen: isFullScreenMode,
                    }}/>
          </TabContent>
          <TabContent for='schema'>
            <Editor value={requestSchema}
                    options={{readOnly: true}}/>
          </TabContent>
        </div>
      </Tabs>
    );
  }
}

BaseRequestTabs.propTypes = {
  currentUri: PropTypes.string.isRequired,
  currentRequest: PropTypes.object.isRequired,
  isDefaultRequest: PropTypes.bool.isRequired,
  requestSchema: PropTypes.string.isRequired,
  isFullScreenMode: PropTypes.bool.isRequired,
  selectedTab: PropTypes.string,
  changeSelected: PropTypes.func.isRequired,
  editRequest: PropTypes.func.isRequired,
  toggleFullScreenMode: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentUri: getCurrentUri(state),
  currentRequest: getCurrentRequest(state),
  isDefaultRequest: isDefaultRequest(state),
  requestSchema: getDefaultRequestSchema(state),
  isFullScreenMode: isFullScreenMode(state),
  selectedTab: getSelectedTab(state),
});

const mapDispatchToProps = {
  changeSelected,
  editRequest,
  toggleFullScreenMode
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseRequestTabs);
