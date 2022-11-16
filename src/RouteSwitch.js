import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ChooseCharacter from "./pages/ChooseCharacter";
import GiveSkills from "./pages/GiveSkills";
import FightPlace from "./pages/FightPlace";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/choose-character" element={<ChooseCharacter />} />
        <Route path="/give-skills" element={<GiveSkills />} />
        <Route path="/fight" element={<FightPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
