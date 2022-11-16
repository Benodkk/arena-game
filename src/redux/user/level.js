import user from "../../database/user";

const initialState = user.lvl;

function levelUp() {
  return {
    type: "LEVEL_UP",
  };
}

export { levelUp };

export default function levelReducer(state = initialState, action) {
  switch (action.type) {
    case "LEVEL_UP":
      return state + 1;

    default:
      return state;
  }
}
