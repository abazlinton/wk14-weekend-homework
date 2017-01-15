import React from 'react';
import Card from '../components/Card.jsx';

var cardComponents;

class CardGroup extends React.Component {

  constructor(props){
    super(props);
    const divStyle = {
      left: props.left,
      top: props.top,
      position: props.position,
      width: props.width
    }

    this.state = {
      divStyle: divStyle,
      cards: [0,0,0,0],
      cardWidth: "0px",
      layout: [],
    };

    this.initCardSize();
  }

  componentDidMount(){
  

  }

  initCardSize(){
    const intWidth = parseInt(this.state.divStyle.width);
    this.state.cardWidth = (intWidth / this.state.cards.length) + "px"
  }


  buildCardComponents(){
    cardComponents = this.state.cards.map((card) =>
      (
        <Card
          src="https://avatars2.githubusercontent.com/u/4398338?v=3&s=460"
          width={this.state.cardWidth}
        />
      )
    )
  }

  render() {
    console.log("render called cardgroup");
    this.buildCardComponents();
    return (
      <div
        style={this.state.divStyle}
      >
        {cardComponents}
      </div>
    );
  }

}

export default CardGroup;
