import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ChooseCharacter from "./pages/ChooseCharacter";
import GiveSkills from "./pages/GiveSkills";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/choose-character" element={<ChooseCharacter />} />
        <Route path="/give-skills" element={<GiveSkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
