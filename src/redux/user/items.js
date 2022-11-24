import items from "../../database/items";
import user from "../../database/user";

user.items.armed.firstHand = items.weapon[0];
user.items.armed.secondHand = items.shields[0];
user.items.backpack = [items.weapon[0], items.shields[0]];
const initialState = user.items;

function firstHand(thing) {
  return {
    type: "FIRST_HAND",
    payload: thing,
  };
}

function secondHand(thing) {
  return {
    type: "SECOND_HAND",
    payload: thing,
  };
}

function toBackpack(thing) {
  return {
    type: "TO_BACKPACK",
    payload: thing,
  };
}

export { firstHand, secondHand, toBackpack };

export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "FIRST_HAND":
      return {
        ...state,
        armed: { ...state.armed, firstHand: action.payload },
      };
    case "SECOND_HAND":
      return {
        ...state,
        armed: { ...state.armed, secondHand: action.payload },
      };
    case "TO_BACKPACK":
      return {
        ...state,
        backpack: [...state.backpack, action.payload],
      };
    default:
      return state;
  }
}
