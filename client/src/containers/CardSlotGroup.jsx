import React from 'react';
import CardSlot from './CardSlot.jsx';

class CardSlotGroup extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <CardSlot />
      </div>
    );
  }

}

export default CardSlotGroup;
