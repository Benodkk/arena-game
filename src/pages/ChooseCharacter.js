import React from "react";

import SelectProfesion from "../components/ChooseCharacter/SelectProfesion";
import SelectNick from "../components/ChooseCharacter/SelectNick";

function ChooseCharacter() {
  return (
    <div className="chooseCharacterContainer">
      <div className="selectionName">CHOOSE CHARACTER</div>
      <SelectProfesion />
      <SelectNick />
    </div>
  );
}
export default ChooseCharacter;
