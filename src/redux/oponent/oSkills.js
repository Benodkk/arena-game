const initialState = {};

function oSetSkills(thing) {
  return {
    type: "O_SET_SKILLS",
    payload: thing,
  };
}

function oGiveDefense(amount) {
  return {
    type: "O_GIVE_DEFENSE",
    payload: amount,
  };
}

export { oSetSkills, oGiveDefense };

export function oSkillsReducer(state = initialState, action) {
  switch (action.type) {
    case "O_SET_SKILLS":
      return action.payload;
    case "O_GIVE_DEFENSE":
      return {
        ...state,
        defense: state.defense + action.payload,
      };
    default:
      return state;
  }
}
