import React, { useEffect, useState } from "react";
import {
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStartFight from "../hooks/useStartFight";

function GiveSkills() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const start = useStartFight();

  const [nr, setNr] = useState(0);
  const [nextStep, setNextStep] = useState("");

  useEffect(() => {
    if (store.level == 1) {
      setNextStep("/firstFight");
      setNr(6);
    } else {
      setNr(3);
      setNextStep("/give-skillss");
    }
  }, [store.level]);

  return (
    <div className="giveSkillsContainer">
      <div className="currentSkills">
        {store.skills.map((element) => {
          return (
            <div key={element.name} className="oneSkill">
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
      <Link to="/fight">
        <button onClick={start}>Next step!</button>
      </Link>
    </div>
  );
}

export default GiveSkills;
