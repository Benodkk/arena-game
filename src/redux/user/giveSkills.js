import user from "../../database/user";

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
        { name: "attack", amount: 2 },
        { name: "defense", amount: 5 },
        { name: "vitality", amount: 5 },
      ];
    case "CHOOSE_WARRIOR":
      return [
        { name: "attack", amount: 5 },
        { name: "defense", amount: 4 },
        { name: "vitality", amount: 3 },
      ];
    case "CHOOSE_ASSASSIN":
      return [
        { name: "attack", amount: 8 },
        { name: "defense", amount: 2 },
        { name: "vitality", amount: 2 },
      ];
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
