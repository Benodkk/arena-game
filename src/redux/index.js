import { giveSkillsReducer, giveProfesionReducer } from "./giveSkills";
import levelReducer from "./level";
import { itemsReducer } from "./items";
import { nameReducer } from "./userName";
import { opinionsReduer } from "./opinions";
import { moneyReducer } from "./money";
import { statsReducer } from "./stats";

const redux = require("redux");
const { combineReducers, createStore } = redux;

const rootReducer = combineReducers({
  skills: giveSkillsReducer,
  level: levelReducer,
  profesion: giveProfesionReducer,
  items: itemsReducer,
  name: nameReducer,
  opinions: opinionsReduer,
  money: moneyReducer,
  stats: statsReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
