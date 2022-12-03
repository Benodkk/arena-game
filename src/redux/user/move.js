function makeMove(thing) {
  return {
    type: "MOVE",
    payload: thing,
  };
}

export { makeMove };

export function moveReducer(state = "", action) {
  switch (action.type) {
    case "MOVE":
      return action.payload;

    default:
      return state;
  }
}
