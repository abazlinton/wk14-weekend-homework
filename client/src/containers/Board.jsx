import React from 'react';
import CardGroup from './CardGroup.jsx';

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <CardGroup position="relative" width="500px" left="100px" top="100px"/>
      </div>
    );
  }

}

export default Board;
