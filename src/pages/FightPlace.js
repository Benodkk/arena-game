import OponentDescription from "../components/fightPlace/OponentDescription";
import UserDescription from "../components/fightPlace/UserDescription";

import Animations from "../components/fightPlace/Animations";

import FinishFight from "../components/fightPlace/FinishFight";
import UserMakeMove from "../components/fightPlace/UserMakeMove";

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
      <FinishFight />
      <Animations />
    </div>
  );
}

export default FightPlace;
