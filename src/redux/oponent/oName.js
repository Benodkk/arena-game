const initialState = "";

function oChangeName(thing) {
  return {
    type: "O_CHANGE_NAME",
    payload: thing,
  };
}

export { oChangeName };

export function oNameReducer(state = initialState, action) {
  switch (action.type) {
    case "O_CHANGE_NAME":
      return action.payload;
    default:
      return state;
  }
}
