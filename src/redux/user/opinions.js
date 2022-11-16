import user from "../../database/user";

const initialState = user.opinions;

function changeBrutality(thing) {
  return {
    type: "CHANGE_BRUTALITY",
    payload: thing,
  };
}

function changeAggressiveness(thing) {
  return {
    type: "CHANGE_AGGRESSIVENESS",
    payload: thing,
  };
}

function changeWinner(thing) {
  return {
    type: "CHANGE_WINNER",
    payload: thing,
  };
}

export { changeBrutality, changeAggressiveness, changeWinner };

export function opinionsReduer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_BRUTALITY":
      return {
        ...state,
        brutality: state.brutality + action.payload,
      };
    case "CHANGE_AGGRESSIVENESS":
      return {
        ...state,
        aggressiveness: state.aggressiveness + action.payload,
      };
    case "CHANGE_WINNER":
      return {
        ...state,
        winner: state.winner + action.payload,
      };
    default:
      return state;
  }
}
