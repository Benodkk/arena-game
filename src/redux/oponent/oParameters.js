const initialState = {};

function oSetParameters(thing) {
  return {
    type: "O_SET_PARAMETERS",
    payload: thing,
  };
}

function oChangeHealth(thing) {
  return {
    type: "O_CHANGE_HEALTH",
    payload: thing,
  };
}

function oChangeEnergy(thing) {
  return {
    type: "O_CHANGE_ENERGY",
    payload: thing,
  };
}

export { oSetParameters, oChangeHealth, oChangeEnergy };

export function oParameterReducer(state = initialState, action) {
  switch (action.type) {
    case "O_SET_PARAMETERS":
      return action.payload;
    case "O_CHANGE_HEALTH":
      return {
        ...state,
        health: state.health + action.payload,
      };
    case "O_CHANGE_ENERGY":
      return {
        ...state,
        energy: state.energy + action.payload,
      };
    default:
      return state;
  }
}
