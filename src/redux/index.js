import { giveSkillsReducer, giveProfesionReducer } from "./user/giveSkills";
import levelReducer from "./user/level";
import { itemsReducer } from "./user/items";
import { nameReducer } from "./user/userName";
import { opinionsReduer } from "./user/opinions";
import { moneyReducer } from "./user/money";
import { statsReducer } from "./user/stats";
import { oNameReducer } from "./oponent/oName";
import { oLevelReducer } from "./oponent/oLvl";
import { oSkillsReducer } from "./oponent/oSkills";
import { oParameterReducer } from "./oponent/oParameters";
import { oItemsReducer } from "./oponent/oItems";
import { parameterReducer } from "./user/parameters";

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
  parameters: parameterReducer,
  oponentName: oNameReducer,
  oponentLevel: oLevelReducer,
  oponentSkils: oSkillsReducer,
  oponentParameters: oParameterReducer,
  oponentItems: oItemsReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
