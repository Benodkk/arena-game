import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profesion from "../database/profesion";
import {
  chooseBrute,
  chooseAssassin,
  chooseWarrior,
} from "../redux/user/giveSkills";

function ChooseCharacter() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="chooseCharacterContainer">
      <div className="profesions">
        {profesion.map((element) => {
          return (
            <div key={element.name} className="oneProfesion">
              <div className="profesionName">{element.name}</div>
              <div className="profesionSkills">
                {element.skills.map((x) => {
                  return (
                    <div key={x.name}>
                      {x.name}: {x.amount}
                    </div>
                  );
                })}
              </div>
              <div className="profesionSuperpower">{element.superpower}</div>
              <button
                onClick={() => {
                  if (element.name == "Brute") {
                    return dispatch(chooseBrute());
                  } else if (element.name == "Warrior") {
                    return dispatch(chooseWarrior());
                  } else if (element.name == "Assassin") {
                    return dispatch(chooseAssassin());
                  }
                }}
              >
                Choose
              </button>
            </div>
          );
        })}
      </div>
      <Link to="/give-skills">
        <button>Next step!</button>
      </Link>
    </div>
  );
}
export default ChooseCharacter;
