import user from "../../database/user";

const initialState = user.name;

function changeName(thing) {
  return {
    type: "CHANGE_NAME",
    payload: thing,
  };
}

export { changeName };

export function nameReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload;
    default:
      return state;
  }
}
