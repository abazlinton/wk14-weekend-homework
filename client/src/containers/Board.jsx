import React from 'react';
import CardSlotGroup from './CardSlotGroup.jsx';

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <CardSlotGroup />
      </div>
    );
  }

}

export default Board;
