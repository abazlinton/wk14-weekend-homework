import React from 'react';
import Card from '../components/Card.jsx';

class CardSlot extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <Card
           src="https://avatars2.githubusercontent.com/u/4398338?v=3&s=460"
           width="100px"
           height="100px"
        />
      </div>
    );
  }

}

export default CardSlot;
