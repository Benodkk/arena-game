let user = {
  profesion: "",
  name: "",
  lvl: 0,
  skills: [
    { name: "attack", amount: 0 },
    { name: "defense", amount: 0 },
    { name: "vitality", amount: 0 },
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
    wins: 0,
    loses: 0,
  },
};

export default user;
