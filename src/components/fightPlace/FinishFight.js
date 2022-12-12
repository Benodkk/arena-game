import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import victory from "../../database/images/victory.png";
import defeat from "../../database/images/defeat.png";
import coin from "../../database/images/coin.png";
import { resetDefense } from "../../redux/user/giveSkills";
import useLeaveFight from "../../hooks/useLeaveFight";

function FinishFight() {
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

  function leaveFight() {
    dispatch(resetDefense(currentDef));
    setDefChanged(false);
  }

  const [nextStep, setNextStep] = useState("");
  const [fightStyle, setFightStyle] = useState({});
  const [endFight, setEndFight] = useState("");

  const [imgAnimation, setImgAnimation] = useState({});
  const [rewardsAnimation, setRewardsAnimation] = useState({});
  const [money, setMoney] = useState();

  // when win and defeat

  useEffect(() => {
    if (store.parameters.health <= 0) {
      setEndFight(defeat);
      setMoney(0);
    }
    if (store.oponentParameters.health <= 0) {
      setEndFight(victory);
      setMoney(100);
    }

    // show FinishFight component when fight is finished

    if (store.parameters.health <= 0 || store.oponentParameters.health <= 0) {
      setTimeout(() => {
        setFightStyle({ visibility: "visible", opacity: 1 });
      }, 1501);

      setTimeout(() => {
        setImgAnimation({
          animation: "dead 0.4s ease-in",
          opacity: 1,
          visibility: "visible",
          transform: "scale(1)",
        });
      }, 2300);
      setTimeout(() => {
        setRewardsAnimation({
          transform: "translateY(0vh)",
        });
      }, 2801);
      leave();
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

  return (
    <div className="finishFightContainer" style={fightStyle}>
      <div className="blackOut"></div>
      <div className="fightFinished">
        <img className="endFightImg" src={endFight} style={imgAnimation} />
        <div className="rewardsContainer" style={rewardsAnimation}>
          <div>Rewards</div>
          <div className="rewards">
            <div>100 exp</div>
            <div>
              {money}
              <img src={coin} />
            </div>
          </div>
        </div>
        <Link to={nextStep} className="nextStepBtn" style={rewardsAnimation}>
          <button onClick={() => leaveFight()}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FinishFight;
