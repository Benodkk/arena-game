import attack from "./images/attack.png";
import shield from "./images/shield.png";
import health from "./images/health.png";

let user = {
  profesion: "",
  name: "",
  lvl: 1,
  skills: [
    { name: "attack", amount: 0, img: attack },
    { name: "defense", amount: 0, img: shield },
    { name: "vitality", amount: 0, img: health },
  ],
  parameters: {
    health: 100,
    energy: 100,
  },
  opinions: {
    brutality: 50,
    aggressiveness: 50,
    winner: 0,
  },
  items: {
    backpack: [],
    armed: {
      firstHand: "",
      secondHand: "",
    },
  },
  money: 0,
  stats: {
    fights: 0,
    wins: 0,
    loses: 0,
  },
};

export default user;
