import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useLeaveFight from "../../hooks/useLeaveFight";

import { useDispatch, useSelector } from "react-redux";
import { resetDefense } from "../../redux/user/giveSkills";

import victory from "../../database/images/victory.png";
import defeat from "../../database/images/defeat.png";
import coin from "../../database/images/coin.png";

function FinishFight() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  // reset deffense after fight

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

  const [endFightImage, setEndFightImage] = useState("");
  const [money, setMoney] = useState();

  const [fightStyle, setFightStyle] = useState({});
  const [imgAnimation, setImgAnimation] = useState({});
  const [rewardsAnimation, setRewardsAnimation] = useState({});

  const leave = useLeaveFight();

  useEffect(() => {
    // when win or defeat

    if (store.parameters.health <= 0) {
      setEndFightImage(defeat);
      setMoney(0);
    }
    if (store.oponentParameters.health <= 0) {
      setEndFightImage(victory);
      setMoney(100);
    }

    // show FinishFight component when fight is finished

    if (store.parameters.health <= 0 || store.oponentParameters.health <= 0) {
      setTimeout(() => {
        setFightStyle({ visibility: "visible", opacity: 1 });
      }, 1500);

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
      }, 2800);
      leave();
    }
  }, [store.parameters.health, store.oponentParameters.health]);

  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    // if level up you get skills points to give
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
        <img
          alt="Fight finished"
          className="endFightImg"
          src={endFightImage}
          style={imgAnimation}
        />
        <div className="rewardsContainer" style={rewardsAnimation}>
          <div>Rewards</div>
          <div className="rewards">
            <div>100 exp</div>
            <div>
              {money}
              <img alt="coin" src={coin} />
            </div>
          </div>
        </div>
        <Link to={nextStep} className="nextStepBtn" style={rewardsAnimation}>
          <button onClick={leaveFight}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FinishFight;
