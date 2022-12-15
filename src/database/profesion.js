import brute from "./images/brute.png";
import warrior from "./images/warrior.png";
import assassin from "./images/assassin.png";

import attack from "./images/attack.png";
import shield from "./images/shield.png";
import health from "./images/health.png";

let profesion = [
  {
    name: "Brute",
    skills: [
      { name: "attack", amount: 2, img: attack },
      { name: "defense", amount: 5, img: shield },
      { name: "vitality", amount: 5, img: health },
    ],
    superpower: "Giant smash",
    img: brute,
    superpowerDescription:
      "Giant smash: Your next attack is increased by double value of your vitality.",
  },
  {
    name: "Warrior",
    skills: [
      { name: "attack", amount: 5, img: attack },
      { name: "defense", amount: 4, img: shield },
      { name: "vitality", amount: 3, img: health },
    ],
    superpower: "Counterattack",
    img: warrior,
    superpowerDescription:
      "Counterattack: Your next move give you energy and increase your defense. In next tour your attack damage is doubled.",
  },
  {
    name: "Assassin",
    skills: [
      { name: "attack", amount: 8, img: attack },
      { name: "defense", amount: 2, img: shield },
      { name: "vitality", amount: 2, img: health },
    ],
    superpower: "Fatal strike",
    img: assassin,
    superpowerDescription:
      "Fatal strike: Your next attack omits enemy defense.",
  },
];

export default profesion;
