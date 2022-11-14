import user from "../database/user";

const initialState = user.stats;

function win() {
  return {
    type: "WIN",
  };
}
function loss() {
  return {
    type: "LOSS",
  };
}

export { win, loss };

export function statsReducer(state = initialState, action) {
  switch (action.type) {
    case "WIN":
      return {
        ...state,
        wins: state.wins + 1,
      };
    case "LOSS":
      return {
        ...state,
        loses: state.loses + 1,
      };
    default:
      return state;
  }
}
