const initialState = {};

function oSetItems(thing) {
  return {
    type: "O_SET_ITEMS",
    payload: thing,
  };
}

export { oSetItems };

export function oItemsReducer(state = initialState, action) {
  switch (action.type) {
    case "O_SET_ITEMS":
      return action.payload;
    default:
      return state;
  }
}
