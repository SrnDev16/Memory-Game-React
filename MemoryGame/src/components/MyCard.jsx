import styles from "./memory.module.css";
import backImg from "../assets/images/react.png";

const MyCard = ({ card, onClick }) => {
  return (
    <div
      className={card.isFlipped ? `${styles.memoryCard} ${styles.flip}`: `${styles.memoryCard}` }
      style={{ order: card.order }}
      onClick={onClick}
      // data-testid={card.id}
    >
      <img src={card.img} alt="Front-face" className={styles.FrontFace} />
      <img src={backImg} alt="Back-face" className={styles.BackFace} />
    </div>
  );
};

export default MyCard;
