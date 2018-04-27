import {component, div} from "../../../../elements";
import FgMethodEditor from "../fgMethodEditor/FgMethodEditor";
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import React from 'react';

export default class FgMethodResponseTabs extends React.Component {
  render() {
    return component(Tabs, {
        className: 'tabs tabs-1'
      },
      div({className: 'tab-links'},
        component(TabLink, {to: 'currentResponse'}, "Ответ"),
      ),
      div({className: 'content'},
        component(TabContent, {for: 'currentResponse'},
          component(FgMethodEditor, {
              value: this.props.response,
              options: {readOnly: true}
            }
          )
        )
      )
    )
  }
}
