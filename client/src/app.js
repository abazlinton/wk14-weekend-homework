var React = require('react');
var ReactDOM = require('react-dom');
import Board from './containers/Board.jsx';

window.onload = function(){
  ReactDOM.render(
    <Board/>,
    // <div></div>,
    document.getElementById('app')
  );
}
