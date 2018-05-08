import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import {normalizeLineEndings} from "../../../../../utils";
import './Editor.css';
import 'codemirror-formatting';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/display/fullscreen';

export default class Editor extends React.Component {

  componentDidMount() {
    if (!this.textareaNode) return;
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(this.textareaNode, {
      lineNumbers: true,
      mode: "application/json",
      gutters: ["CodeMirror-lint-markers"],
      autoRefresh: true,
      matchBrackets: true,
      tabSize: 4,
      indentUnit: 4
    });
    this.codeMirror.on('change', this.onChange);
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
    this.codeMirror.addKeyMap(this.getDefaultKeyMap());
    this.componentWillReceiveProps(this.props);
  }

  componentWillUnmount () {
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.codeMirror && nextProps.value !== undefined && nextProps.value !== this.props.value
      && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {

      this.codeMirror.setValue(nextProps.value);
    }

    if (typeof nextProps.options === 'object') {
      Object.keys(nextProps.options).forEach(optionName => {
        if (nextProps.options.hasOwnProperty(optionName)) {
          const oldValue = this.codeMirror.getOption(optionName);
          const newValue = nextProps.options[optionName];
          if (oldValue !== newValue) {
            this.codeMirror.setOption(optionName, newValue);
          }
        }
      });
    }
  };

  getDefaultKeyMap() {
    return {
      'Ctrl-Alt-L': this.onFormat,
      'Ctrl-Enter': this.onToggleFullScreenMode
    }
  }

  onFormat(editor) {
    const lastLine = editor.lastLine();
    editor.autoFormatRange({line: 0, ch: 0}, {line: lastLine, ch: editor.getLine(lastLine).length});
  }

  onToggleFullScreenMode = () => {
    this.props.onToggleFullScreenMode && this.props.onToggleFullScreenMode();
  };

  onChange = (doc, change) => {
    if (this.props.onChange && change.origin !== 'setValue') {
      this.props.onChange(doc.getValue());
    }
  };

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || CodeMirror;
  }

  render() {
    return (
      <textarea ref={(ref) => this.textareaNode = ref}/>
    );
  }
}

Editor.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.object,
  onChange: PropTypes.func,
  onToggleFullScreenMode: PropTypes.func,
};
