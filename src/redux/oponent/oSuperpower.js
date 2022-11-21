const initialState = "";

function oSuperpower(amount) {
  return {
    type: "O_SUPERPOWER",
    payload: amount,
  };
}

export { oSuperpower };

export function oSuperpowerReducer(state = initialState, action) {
  switch (action.type) {
    case "O_SUPERPOWER":
      return action.payload;
    default:
      return state;
  }
}
