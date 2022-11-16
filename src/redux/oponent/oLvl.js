const initialState = 0;

function oSetLevel(thing) {
  return {
    type: "O_SET_LEVEL",
    payload: thing,
  };
}

export { oSetLevel };

export function oLevelReducer(state = initialState, action) {
  switch (action.type) {
    case "O_SET_LEVEL":
      return action.payload;
    default:
      return state;
  }
}
