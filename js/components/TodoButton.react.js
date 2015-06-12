'use strict';

var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoButton = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.value || '',
      caps: -1
    };
  },
  render: function() {
    return <input type="button" onClick={this._changeCase} value={this.props.buttonLabel} />
  },
  _changeCase: function() {
    var text = this.state.value;
    if(this.state.caps === -1 || this.state.caps === 2) text = text.toUpperCase(); // 0=upper, 1=title, 2=lower
    else if(this.state.caps === 0) {
      var newStr = '';
      for(var i = 0; i < text.length-1; i++) {
        if(i === 0) {
        newStr += text[0].toUpperCase();
        if(newStr[i] === ' ') newStr += text[i+1].toUpperCase();
        else newStr += text[i+1].toLowerCase();
        }
       else {
        if(newStr[i] === ' ') newStr += text[i+1].toUpperCase();
       else newStr += text[i+1].toLowerCase();
       }
     }
      text = newStr;
    } else text = text.toLowerCase();
    this.props.onCaseClick(text);
    this.setState({
      value: text,
      caps: (this.state.caps + 1) % 3
    });
  }
});

module.exports = TodoButton;
