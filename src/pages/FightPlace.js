import React from "react";

import OponentDescription from "../components/FightPlace/OponentDescription";
import UserDescription from "../components/FightPlace/UserDescription";
import Animations from "../components/FightPlace/Animations";
import FinishFight from "../components/FightPlace/FinishFight";
import UserMakeMove from "../components/FightPlace/UserMakeMove";
import StartFight from "../components/FightPlace/StartFight";

function FightPlace() {
  return (
    <div className="fightPlaceContainer">
      <div className="duringFight">
        <div className="userFightContainer">
          <UserMakeMove />
          <UserDescription />
        </div>
        <OponentDescription />
      </div>
      <StartFight />
      <FinishFight />
      <Animations />
    </div>
  );
}

export default FightPlace;
