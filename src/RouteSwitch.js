import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import ChooseCharacter from "./pages/ChooseCharacter";
import GiveSkills from "./pages/GiveSkills";
import FightPlace from "./pages/FightPlace";
import Shop from "./pages/Shop";
import Menu from "./pages/Menu";
import Training from "./pages/Training";
import Arena from "./pages/Arena";
import User from "./pages/User";
import MyItems from "./pages/MyItems";

import "./style.css";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/choose-character" element={<ChooseCharacter />} />
        <Route path="/give-skills" element={<GiveSkills />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/fight" element={<FightPlace />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/training" element={<Training />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/my-items" element={<MyItems />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
