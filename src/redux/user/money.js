import user from "../../database/user";

const initialState = user.money;

function changeMoney(thing) {
  return {
    type: "CHANGE_MONEY",
    payload: thing,
  };
}

export { changeMoney };

export function moneyReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MONEY":
      return state + action.payload;
    default:
      return state;
  }
}
