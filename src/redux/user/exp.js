function giveExp(amount = 100) {
  return {
    type: "GIVE_EXP",
    payload: amount,
  };
}
function resetExp() {
  return {
    type: "RESET_EXP",
  };
}

export { giveExp, resetExp };

export function giveExpReducer(state = 0, action) {
  switch (action.type) {
    case "GIVE_EXP":
      return state + action.payload;
    case "RESET_EXP":
      return 0;
    default:
      return state;
  }
}
