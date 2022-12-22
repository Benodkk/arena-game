import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DelayLink from "../components/DelayLink";

import { useDispatch, useSelector } from "react-redux";
import {
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";

import useStartFight from "../hooks/useStartFight";
import useBlackScreenOn from "../hooks/useBlackScreenOn";
import profesion from "../database/profesion";

function GiveSkills() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [blackOutStyle, goBlack] = useBlackScreenOn();

  const start = useStartFight();

  const [skillPoints, setSkillPoints] = useState(0);
  const [nextStep, setNextStep] = useState("");
  const [delay, setDelay] = useState(0);

  const characterLook = profesion.find((x) => x.name == store.profesion).img;

  // if character have been just chosen, you have 6 skill points to split and you got straight to first fight,
  // if you just have got level up, you have 3 skill points to split and you go to the menu

  useEffect(() => {
    if (store.level == 1) {
      setNextStep("/fight");
      setSkillPoints(6);
      setDelay(1000);
      start();
    } else {
      setNextStep("/menu");
      setSkillPoints(3);
      setDelay(0);
    }
  }, [store.level]);

  // if character have been just chosen, screen going black and taking use to first fight

  function blackOut() {
    if (store.level == 1) {
      goBlack(1000, 1);
    }
  }

  return (
    <div className="giveSkillsContainer">
      <div style={blackOutStyle}></div>
      <div className="selectionName">GIVE SKILLS</div>
      <div className="userNameContainer">
        <div className="userName">{store.name}</div>
        <img
          alt="character look"
          className="characterImage"
          src={characterLook}
        />
      </div>
      <div className="currentSkills">
        <div>Skills to give: {skillPoints}</div>
        {store.skills.map((element) => {
          return (
            <div key={element.name} className="oneSkill">
              <img alt={element.name} src={element.img} />
              <div>{element.name}:</div>
              <div>{element.amount}</div>
              <button
                onClick={() => {
                  if (skillPoints > 0) {
                    if (element.name == "attack") {
                      dispatch(giveAttack());
                    } else if (element.name == "defense") {
                      dispatch(giveDefense());
                    } else if (element.name == "vitality") {
                      dispatch(giveVitality());
                    }
                    setSkillPoints(skillPoints - 1);
                  }
                }}
              >
                +1
              </button>
            </div>
          );
        })}
      </div>
      {skillPoints == 0 ? (
        <DelayLink delay={delay} to={nextStep}>
          <button onClick={blackOut}>Next step!</button>
        </DelayLink>
      ) : (
        <div className="emptyDiv"></div>
      )}
    </div>
  );
}

export default GiveSkills;
