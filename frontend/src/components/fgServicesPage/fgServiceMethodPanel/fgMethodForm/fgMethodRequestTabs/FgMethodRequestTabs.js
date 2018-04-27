import {component, div} from "../../../../elements";
import {changeSelected} from "../../../../../actions/tabs";
import {editRequest} from '../../../../../actions/requests';
import FgMethodEditor from "../fgMethodEditor/FgMethodEditor";
import {getDefaultRequestSchema} from "../../../../../selectors/requests";
import {isFullScreenMode} from "../../../../../selectors/editor";
import {toggleFullScreenMode} from "../../../../../actions/editor";
import {getSelectedTab} from "../../../../../selectors/tabs";
import {isDefaultRequest} from "../../../../../selectors/select";
import {getCurrentUri} from "../../../../../selectors/router";
import {connect} from 'react-redux';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import React from 'react';

class FgMethodRequestTabs extends React.Component {
  render() {
    const {
      isDefault,
      currentUri,
      currentRequest,
      requestSchema,
      changeSelected,
      toggleFullScreenMode,
      isFullScreenMode,
      selectedTab,
      editRequest
    } = this.props;
    return component(Tabs, {
        className: 'tabs tabs-1',
        handleSelect: tab => changeSelected(tab, currentUri, currentRequest.id),
        selectedTab
      },
      div({className: 'tab-links'},
        component(TabLink, {to: 'value'}, "Запрос"),
        component(TabLink, {to: 'schema'}, "Описание параметров"),
      ),
      div({className: 'content'},
        component(TabContent, {for: 'value'},
          component(FgMethodEditor, {
            value: currentRequest.value,
            options: {
              lint: true,
              autoCloseBrackets: true,
              readOnly: isDefault,
              fullScreen: isFullScreenMode
            },
            onToggleFullScreenMode: toggleFullScreenMode,
            onChange: value => editRequest(currentUri, {
              id: currentRequest.id,
              value
            })
          })
        ),
        component(TabContent, {for: 'schema'},
          component(FgMethodEditor, {
              value: requestSchema,
              options: {readOnly: true}
            }
          )
        )
      )
    );
  }
}

export default connect(
  state => ({
    isDefault: isDefaultRequest(state),
    isFullScreenMode: isFullScreenMode(state),
    requestSchema: getDefaultRequestSchema(state),
    selectedTab: getSelectedTab(state),
    currentUri: getCurrentUri(state)
  }),
  {
    changeSelected,
    editRequest,
    toggleFullScreenMode
  }
)(FgMethodRequestTabs);
