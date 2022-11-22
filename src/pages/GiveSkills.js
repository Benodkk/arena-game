import React, { useEffect, useState } from "react";
import {
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStartFight from "../hooks/useStartFight";
import profesion from "../database/profesion";

function GiveSkills() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const start = useStartFight();

  const [nr, setNr] = useState(0);
  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    if (store.level == 1) {
      setNextStep("/fight");
      setNr(6);
      start();
    } else {
      setNr(3);
      setNextStep("/menu");
    }
  }, [store.level]);

  const character = profesion.find((x) => x.name == store.profesion).img;

  return (
    <div className="giveSkillsContainer">
      <div className="selectionName">GIVE SKILLS</div>
      <div className="userNameContainer">
        <div className="userName">{store.name}</div>
        <img src={character} />
      </div>
      <div className="currentSkills">
        <div>Skills to give: {nr}</div>
        {store.skills.map((element) => {
          return (
            <div key={element.name} className="oneSkill">
              <img src={element.img} />
              <div>{element.name}:</div>
              <div>{element.amount}</div>
              <button
                onClick={() => {
                  if (nr > 0) {
                    if (element.name == "attack") {
                      dispatch(giveAttack());
                    } else if (element.name == "defense") {
                      dispatch(giveDefense());
                    } else if (element.name == "vitality") {
                      dispatch(giveVitality());
                    }
                    setNr(nr - 1);
                  }
                }}
              >
                +1
              </button>
            </div>
          );
        })}
      </div>
      {nr == 0 ? (
        <Link to={nextStep}>
          <button>Next step!</button>
        </Link>
      ) : (
        <div className="emptyDiv"></div>
      )}
    </div>
  );
}

export default GiveSkills;
