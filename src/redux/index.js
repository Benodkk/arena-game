import { giveSkillsReducer, giveProfesionReducer } from "./user/giveSkills";
import levelReducer from "./user/level";
import { itemsReducer } from "./user/items";
import { nameReducer } from "./user/userName";
import { opinionsReduer } from "./user/opinions";
import { moneyReducer } from "./user/money";
import { statsReducer } from "./user/stats";
import { giveExpReducer } from "./user/exp";
import { parameterReducer } from "./user/parameters";

import { oNameReducer } from "./oponent/oName";
import { oLevelReducer } from "./oponent/oLvl";
import { oSkillsReducer } from "./oponent/oSkills";
import { oParameterReducer } from "./oponent/oParameters";
import { oItemsReducer } from "./oponent/oItems";
import { oSuperpowerReducer } from "./oponent/oSuperpower";
import { moveReducer } from "./user/move";

import { blackOnReducer } from "./blackOn";

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
  exp: giveExpReducer,
  parameters: parameterReducer,
  move: moveReducer,
  oponentName: oNameReducer,
  oponentLevel: oLevelReducer,
  oponentSkils: oSkillsReducer,
  oponentParameters: oParameterReducer,
  oponentItems: oItemsReducer,
  oponentSuperpower: oSuperpowerReducer,
  blackOn: blackOnReducer,
});

const store = createStore(rootReducer);

export default store;
