import OponentDescription from "../components/fightPlace/OponentDescription";
import UserDescription from "../components/fightPlace/UserDescription";

import Animations from "../components/fightPlace/Animations";

import FinishFight from "../components/fightPlace/FinishFight";

function FightPlace() {
  return (
    <div className="fightPlaceContainer">
      <div className="duringFight">
        <UserDescription />
        <OponentDescription />
      </div>
      <FinishFight />
      <Animations />
    </div>
  );
}

export default FightPlace;
