import shuffle from "shuffle-array";
import App from "../../App";

class MemoryCards {
  constructor() {
    this.cards = [];
    this.data = []
    this.NUM_IMAGES = 10;
  }

  generateCardSetData() {
    //
    // Generate a set of cards with image pairs
    //
    this.cards = [];
    for (let i = 0; i < 2 * this.NUM_IMAGES; i++) {
      let card1 = {
          id: i+1,
          image: this.data[i].image,
          imageUp: false,
          matched: false
      };
      let card2 = {
          id: i+2,
          image: this.data[i].image,
          imageUp: false,
          matched: false
      };
      this.cards.push(card1);
      this.cards.push(card2);
      i++;
    }
    shuffle(this.cards);
  }
  getCard(id) {
    for (let i = 0; i < 2 * this.NUM_IMAGES; i++) {
      if (this.cards[i].id === id) {
        return this.cards[i];
      }
    }
  }

  flipCard(id, imageUp) {
    this.getCard(id).imageUp = imageUp;
  }

  setCardAsMatched(id, matched) {
    this.getCard(id).matched = matched;
  }

  cardsHaveIdenticalImages(id1, id2) {
    if (this.getCard(id1).image === this.getCard(id2).image) {
      return true;
    } else {
      return false;
    }
  }
}

export default MemoryCards;
