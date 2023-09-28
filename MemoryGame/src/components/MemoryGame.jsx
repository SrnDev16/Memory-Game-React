import styles from "./memory.module.css";
import { useState } from "react";
import { cardsData } from "../data/CardData";
import MyCard from "./MyCard";

const MemoryGame = () => {
  const [cardsState, setCardsState] = useState(cardsData);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(false);
  const [wait, setWait] = useState(false);

  const handleClick = async (clickedCard) => {
    if (wait) return;
    if (!secondCard) {
      await setFirstCard(clickedCard);
      await setSecondCard(true);
      changeStatusCard(clickedCard);
    } else {
      await setSecondCard(false);
      changeStatusCard(clickedCard);
      checker(clickedCard);
      setFirstCard(null);
    }
  };

  const checker = async (card) => {
    if(card.name === firstCard.name){
      card["passed"] = true;
      firstCard["passed"] = true;
      changeStatusCard(card);
      changeStatusCard(firstCard);
    }else{
      setWait(true);
      setTimeout(()=>{
        changeStatusCard(card);
        changeStatusCard(firstCard);
        setWait(false);
      },1500)
    }
  }

  const changeStatusCard = async (clickedCard) => {
   if(!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
   let index = cardsState.findIndex((card) => card.id === clickedCard.id);
   let newState = [...cardsState];
   newState.splice(index, 1, clickedCard);
   await setCardsState(newState);
  };

  return (
    <div className={styles.MemoryGame}>
      {cardsState?.map((card,index) => (
        <MyCard key={index} card={card} onClick={() => handleClick(card)} />
      ))}
    </div>
  );
};

export default MemoryGame;
