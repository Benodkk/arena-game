import user from "../../database/user";

import attack from "../../database/images/attack.png";
import shield from "../../database/images/shield.png";
import health from "../../database/images/health.png";

const initialState = user.skills;

function giveAttack() {
  return {
    type: "GIVE_ATTACK",
  };
}

function giveDefense(amount = 1) {
  return {
    type: "GIVE_DEFENSE",
    payload: amount,
  };
}

function giveVitality() {
  return {
    type: "GIVE_VITALITY",
  };
}

function resetDefense(amount) {
  return {
    type: "RESET_DEFENSE",
    payload: amount,
  };
}

function chooseBrute() {
  return {
    type: "CHOOSE_BRUTE",
  };
}

function chooseWarrior() {
  return {
    type: "CHOOSE_WARRIOR",
  };
}

function chooseAssassin() {
  return {
    type: "CHOOSE_ASSASSIN",
  };
}

export {
  giveAttack,
  giveDefense,
  giveVitality,
  resetDefense,
  chooseBrute,
  chooseWarrior,
  chooseAssassin,
};

export function giveSkillsReducer(state = initialState, action) {
  switch (action.type) {
    // GIVE NORMAL SKILLS
    case "GIVE_ATTACK":
      state[0].amount += 1;
      return state;
    case "GIVE_DEFENSE":
      state[1].amount += action.payload;
      return state;
    case "GIVE_VITALITY":
      state[2].amount += 1;
      return state;

    // GIVE PROFESION
    case "CHOOSE_BRUTE":
      return [
        { name: "attack", amount: 2, img: attack },
        { name: "defense", amount: 5, img: shield },
        { name: "vitality", amount: 5, img: health },
      ];
    case "CHOOSE_WARRIOR":
      return [
        { name: "attack", amount: 5, img: attack },
        { name: "defense", amount: 4, img: shield },
        { name: "vitality", amount: 3, img: health },
      ];
    case "CHOOSE_ASSASSIN":
      return [
        { name: "attack", amount: 80, img: attack },
        { name: "defense", amount: 2, img: shield },
        { name: "vitality", amount: 2, img: health },
      ];

    // RESET DEFENSE AFTER FIGHT
    case "RESET_DEFENSE":
      state[1].amount = action.payload;
      return state;
    default:
      return state;
  }
}

export function giveProfesionReducer(state = user.profesion, action) {
  switch (action.type) {
    case "CHOOSE_BRUTE":
      return "Brute";
    case "CHOOSE_WARRIOR":
      return "Warrior";
    case "CHOOSE_ASSASSIN":
      return "Assassin";
    default:
      return state;
  }
}
