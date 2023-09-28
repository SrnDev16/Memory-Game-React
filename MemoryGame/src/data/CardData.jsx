import bee from "../assets/images/bee.png";
import birds from "../assets/images/birds.png";
import coffee from "../assets/images/coffee.png";
import dog from "../assets/images/dog.png";
import guitar from "../assets/images/guitar.png";
import heart from "../assets/images/heart.png";

const cards = [
  { id: 1, name: "bee", img: bee },
  { id: 2, name: "bee", img: bee },
  { id: 3, name: "birds", img: birds },
  { id: 4, name: "birds", img: birds },
  { id: 5, name: "coffee", img: coffee },
  { id: 6, name: "coffee", img: coffee },
  { id: 7, name: "dog", img: dog },
  { id: 8, name: "dog", img: dog },
  { id: 9, name: "guitar", img: guitar },
  { id: 10, name: "guitar", img: guitar },
  { id: 11, name: "heart", img: heart },
  { id: 12, name: "heart", img: heart },
];

const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * cards.length),
  isFlipped : false
}));

export { cardsData  }