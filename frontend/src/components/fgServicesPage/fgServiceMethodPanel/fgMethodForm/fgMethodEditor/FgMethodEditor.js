import {textarea} from "../../../../elements";
import {normalizeLineEndings} from "../../../../../utils";
import React from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/display/fullscreen.css";
import CodeMirror from 'codemirror';
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

export default class FgMethodEditor extends React.Component {

  componentDidMount() {
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
    this.codeMirror.setSize('100%', 'calc(100vh - 310px)');
    this.codeMirror.on('change', this.onChange.bind(this));
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
      'Ctrl-Enter': this.onToggleFullScreenMode.bind(this)
    }
  }

  onFormat(editor) {
    const lastLine = editor.lastLine();
    editor.autoFormatRange({line: 0, ch: 0}, {line: lastLine, ch: editor.getLine(lastLine).length});
  }

  onToggleFullScreenMode() {
    if (this.props.onToggleFullScreenMode) {
      this.props.onToggleFullScreenMode();
    }
  }

  onChange(doc, change) {
    if (this.props.onChange && change.origin !== 'setValue') {
      this.props.onChange(doc.getValue());
    }
  };

  getCodeMirrorInstance() {
    return this.props.codeMirrorInstance || CodeMirror;
  }

  render() {
    return textarea({
      ref: ref => this.textareaNode = ref,
      style: {resize: 'none'}
    })
  }
}
