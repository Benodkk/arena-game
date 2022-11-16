import user from "../../database/user";

const initialState = user.parameters;

function setParameters(thing) {
  return {
    type: "SET_PARAMETERS",
    payload: thing,
  };
}

function changeHealth(thing) {
  return {
    type: "CHANGE_HEALTH",
    payload: thing,
  };
}

function changeEnergy(thing) {
  return {
    type: "CHANGE_ENERGY",
    payload: thing,
  };
}

function setEnergy() {
  return {
    type: "SET_ENERGY",
  };
}

export { setParameters, changeHealth, changeEnergy, setEnergy };

export function parameterReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PARAMETERS":
      return action.payload;
    case "CHANGE_HEALTH":
      return {
        ...state,
        health: state.health + action.payload,
      };
    case "CHANGE_ENERGY":
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    case "SET_ENERGY":
      return {
        ...state,
        energy: 100,
      };
    default:
      return state;
  }
}
