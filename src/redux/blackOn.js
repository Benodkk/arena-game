// blackOn() should be called if we want render next component with black screen going off (call useBlackScreenOff hook)

function blackOn() {
  return {
    type: "BLACK_ON",
  };
}
function blackOff() {
  return {
    type: "BLACK_OFF",
  };
}

export { blackOn, blackOff };

export function blackOnReducer(state = "", action) {
  switch (action.type) {
    case "BLACK_ON":
      return "black";
    case "BLACK_OFF":
      return "";
    default:
      return state;
  }
}
