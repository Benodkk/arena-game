import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OponentDescription from "../components/fightPlace/OponentDescription";
import UserDescription from "../components/fightPlace/UserDescription";
import { resetDefense } from "../redux/user/giveSkills";
import { changeMoney } from "../redux/user/money";
import { giveExp } from "../redux/user/exp";
import useLeaveFight from "../hooks/useLeaveFight";
import { Link } from "react-router-dom";
import useStartFight from "../hooks/useStartFight";
import Animations from "../components/fightPlace/Animations";

import FinishFight from "../components/fightPlace/FinishFight";

import victory from "../database/images/victory.png";
import defeat from "../database/images/defeat.png";

function FightPlace() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const leave = useLeaveFight();

  // reset deff after fight

  const [defChanged, setDefChanged] = useState(false);
  const [currentDef, setCurrentDef] = useState(0);

  if (defChanged == false) {
    setDefChanged(true);
    setCurrentDef(store.skills[1].amount);
  }

  // when win and defeat

  const [nextStep, setNextStep] = useState("");
  const [fightStyle, setFightStyle] = useState({});
  const [endFight, setEndFight] = useState("");

  useEffect(() => {
    if (store.parameters.health <= 0 || store.oponentParameters.health <= 0) {
      console.log("dupa");
      setTimeout(() => {
        setFightStyle({ visibility: "visible", opacity: 1 });
      }, 1000);
      leave();
    }

    if (store.parameters.health <= 0) {
      setEndFight(defeat);
    }
    if (store.oponentParameters.health <= 0) {
      setEndFight(victory);
    }
  }, [store.parameters.health, store.oponentParameters.health]);

  useEffect(() => {
    // if level up
    if (store.exp == 0) {
      setNextStep("/give-skills");
    } else {
      setNextStep("/menu");
    }
  }, [store.exp]);

  function leaveFight() {
    dispatch(resetDefense(currentDef));
    setDefChanged(false);
  }

  return (
    <div className="fightPlaceContainer">
      <div className="duringFight">
        <UserDescription />
        <OponentDescription />
      </div>
      <FinishFight
        nextStep={nextStep}
        leaveFight={leaveFight}
        fightStyle={fightStyle}
        endFight={endFight}
      />
      <Animations />
    </div>
  );
}

export default FightPlace;
