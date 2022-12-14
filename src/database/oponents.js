import oponent1 from "../database/images/oponent1.png";
import oponent2 from "../database/images/oponent2.png";
import oponent3 from "../database/images/oponent3.png";
import oponent4 from "../database/images/oponent4.png";
import oponent5 from "../database/images/oponent5.png";
import brute from "../database/images/brute.png";

let oponents = [
  {
    id: 1,
    name: "Joe",
    lvl: 1,
    img: oponent5,
    skills: { attack: 3, defense: 3, vitality: 3 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Fatal strike",
    items: {
      armed: {
        firstHand: [2],
        secondHand: {
          type: "second weapon",
          stat: [2],
        },
      },
    },
  },
  {
    id: 2,
    name: "Big John",
    lvl: 1,
    img: oponent2,
    skills: { attack: 6, defense: 6, vitality: 5 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Giant smash",
    items: {
      armed: {
        firstHand: [5],
        secondHand: {
          type: "second weapon",
          stat: [3, 4],
        },
      },
    },
  },
  {
    id: 3,
    name: "Matt Dragon II",
    lvl: 1,
    img: oponent3,
    skills: { attack: 5, defense: 6, vitality: 6 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Counterattack",
    items: {
      armed: {
        firstHand: [4, 6],
        secondHand: {
          type: "shield",
          stat: [4],
        },
      },
    },
  },
  {
    id: 4,
    name: "Fat Bob",
    lvl: 1,
    img: brute,
    skills: { attack: 3, defense: 8, vitality: 7 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Giant smash",
    items: {
      armed: {
        firstHand: [4, 5],
        secondHand: {
          type: "shield",
          stat: [6],
        },
      },
    },
  },
  {
    id: 5,
    name: "Janusz",
    lvl: 2,
    img: oponent4,
    skills: { attack: 8, defense: 7, vitality: 5 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Fatal strike",
    items: {
      armed: {
        firstHand: [5, 9],
        secondHand: {
          type: "second weapon",
          stat: [4, 6],
        },
      },
    },
  },
  {
    id: 6,
    name: "Jamie Lanister",
    lvl: 2,
    img: oponent1,
    skills: { attack: 10, defense: 4, vitality: 5 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Fatal strike",
    items: {
      armed: {
        firstHand: [6, 10],
        secondHand: {
          type: "second weapon",
          stat: [5],
        },
      },
    },
  },
  {
    id: 7,
    name: "Master of puppets",
    lvl: 2,
    img: oponent5,
    skills: { attack: 6, defense: 6, vitality: 10 },
    parameters: {
      health: 100,
      energy: 100,
    },
    superpower: "Counterattack",
    items: {
      armed: {
        firstHand: [7, 9],
        secondHand: {
          type: "shield",
          stat: [7],
        },
      },
    },
  },
];

export default oponents;
