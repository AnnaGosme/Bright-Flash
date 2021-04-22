import React, { Component } from "react";
import "./Game.css";
import CardView from "./CardView";
import MemoryCards from "./MemoryCards";
import axios from "axios";

class Game extends Component {
  state = {}; //the state stores the info about the player actions

  constructor(props) {
    super(props);
    this.memoryCards = new MemoryCards(); //logic card game initialized
  }

  componentDidMount() {
    //first method that is executed.
    this.getData();
  }
  getData = () => {
    //TO MOVE OUT: calls the API
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => this.initGame(data)); //when the data arrives, inits the game
  };

  //initialize the game
  initGame(data) {
    this.memoryCards.data = data;
    this.memoryCards.generateCardSetData(); //creates the array of cards
    this.setState({
      //set initial state
      turnNo: 1, //first turn
      pairsFound: 0, //no pairs found
      numClicksWithinTurn: 0, //player has not clicked any
      firstId: undefined, //this is save the first card clicked
      secondId: undefined, //this is to save the second card clciked
    });
  }
  //executed by render to visualize the cards
  getCardViews() {
    const cardViews = this.memoryCards.cards.map((c) => (
      <CardView
        key={c.id}
        id={c.id}
        image={c.image}
        imageUp={c.imageUp}
        matched={c.matched}
        onClick={this.onCardClicked}
      />
    ));
    return cardViews;
  }

  clearCards(id1, id2) {
    const { numClicksWithinTurn, firstId, secondId, turnNo } = this.state;
    if (numClicksWithinTurn !== 2) {
      return;
    }
    this.memoryCards.flipCard(firstId, false);
    this.memoryCards.flipCard(secondId, false);
    this.setState({
      firstId: undefined,
      secondId: undefined,
      numClicksWithinTurn: 0,
      turnNo: turnNo + 1,
    });
  }

  onCardClicked = (id, image) => {
    const {
      numClicksWithinTurn,
      firstId,
      secondId,
      pairsFound,
      turnNo,
    } = this.state;
    //what to do when a player clicks on a card
    if (numClicksWithinTurn === 0 || numClicksWithinTurn === 2) {
      if (numClicksWithinTurn === 2) {
        clearTimeout(this.timeout);
        this.clearCards(firstId, secondId);
      }
      this.memoryCards.flipCard(id, true);
      this.setState({
        firstId: id,
        numClicksWithinTurn: 1,
      });
    } else if (numClicksWithinTurn === 1) {
      this.memoryCards.flipCard(id, true);
      this.setState({
        secondId: id,
        numClicksWithinTurn: 2,
      });

      if (this.memoryCards.cardsHaveIdenticalImages(id, firstId)) {
        this.memoryCards.setCardAsMatched(firstId, true);
        this.memoryCards.setCardAsMatched(id, true);
        this.setState({
          pairsFound: pairsFound + 1,
          firstId: undefined,
          secondId: undefined,
          turnNo: turnNo + 1,
          numClicksWithinTurn: 0,
        });
      } else {
        this.timeout = setTimeout(() => {
          this.clearCards(firstId, secondId);
        }, 5000);
      }
    }
  };

  onPlayAgain = () => {
    //TO BE FIXED: reset the game to play again
    this.initGame(); //TO BE FIXED: what is it missing to make it work?
  };
  //displays in the screen
  render() {
    const { turnNo, pairsFound } = this.state;
    const cardViews = this.getCardViews();
    let gameStatus = (
      <div className="Game-status">
        <div>TURN: {turnNo} </div>
       
        <div>PAIRS FOUND: {pairsFound}</div>
      </div>
    );

    if (pairsFound === this.memoryCards.NUM_IMAGES) {
      //if you match all the cards
      gameStatus = (
        <div className="Game-status">
          <div>GAME COMPLETE!</div>
          <div>You used {turnNo - 1} turns</div>
          <div>
            <button onClick={this.onPlayAgain}>Play again?</button>
          </div>
        </div>
      );
    }

    return (
      <div className="Game">
        <div>{gameStatus}</div>
        <div className="CardContainer">{cardViews}</div>
      </div>
    );
  }
}

export default Game;
