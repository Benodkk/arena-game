import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import profesion from "../database/profesion";
import {
  chooseBrute,
  chooseAssassin,
  chooseWarrior,
} from "../redux/user/giveSkills";
import { changeName } from "../redux/user/userName";
import left from "../database/images/left.png";
import right from "../database/images/right.png";
import question from "../database/images/icons/question-mark.png";
import { isVisible } from "@testing-library/user-event/dist/utils";

function ChooseCharacter() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [front, setFront] = useState(["Brute", "Warrior", "Assassin"]);

  function onChange(e) {
    setName(e.target.value);
  }

  function changeFrontRight() {
    setFront([front[1], front[2], front[0]]);
  }
  function changeFrontLeft() {
    setFront([front[2], front[0], front[1]]);
  }

  function profesionStyle(e) {
    if (e == front[0]) {
      return {
        transition: "1s",
        zIndex: "2",
      };
    } else if (e == front[1]) {
      return {
        transition: "1s",
        transform: "perspective(10px) translateZ(-10px) translateX(-12.48vw)",
        opacity: "0.3",
      };
    } else if (e == front[2]) {
      return {
        transition: "1s",
        transform: "perspective(10px) translateZ(-10px) translateX(29.12vw)",
        opacity: "0.5",
      };
    }
  }

  function btnStyle(e) {
    if (e == front[0]) {
      return {
        opacity: "1",
      };
    } else {
      return {
        opacity: "0",
      };
    }
  }

  function nameStyle(e) {
    if (e == store.profesion) {
      return {
        backgroundColor: "rgba(255, 255, 100, 0.8)",
      };
    }
  }

  // show superpower info on question mark hoover

  const [infoStyle, setInfoStyle] = useState("");

  function showInfo(e) {
    setInfoStyle(e.target.id);
  }

  function hideInfo() {
    setInfoStyle("");
  }

  function info(e) {
    if (e == infoStyle) {
      return {
        opacity: 1,
        visibility: "visible",
      };
    }
  }

  function superpowerInfo(e) {
    if (e == "Brute") {
      return "Giant smash: Your next attack is increased by double value of your vitality.";
    }
    if (e == "Assassin") {
      return "Fatal strike: Your next attack omit enemy defense.";
    }
    if (e == "Warrior") {
      return "Counterattack: Your next move give you energy and increase your defense. In next tour your attack damage is doubled.";
    }
  }

  return (
    <div className="chooseCharacterContainer">
      <div className="selectionName">CHOOSE CHARACTER</div>
      <div className="profesions">
        {profesion.map((element) => {
          return (
            <div
              className="oneProfesionContainer"
              key={element.name}
              style={profesionStyle(element.name)}
            >
              <div
                className="changeProfesionBtnLeft"
                onClick={changeFrontLeft}
                style={btnStyle(element.name)}
              >
                <img src={left} />
              </div>
              <div className="oneProfesion">
                <div className="profesionName" style={nameStyle(element.name)}>
                  {element.name}
                </div>
                <img className="characterLook" src={element.img} />
                <div className="profesionSkills">
                  {element.skills.map((x) => {
                    return (
                      <div key={x.name} className="oneSkill">
                        <img src={x.img} />
                        <div>
                          {x.name}: {x.amount}
                        </div>
                      </div>
                    );
                  })}
                  <div className="profesionSuperpower">
                    <div>Superpower: {element.superpower}</div>
                    <img
                      id={`${element.name} info`}
                      className="questionMark"
                      src={question}
                      onMouseEnter={showInfo}
                      onMouseLeave={hideInfo}
                    />
                    <div
                      className="superpowerInfo"
                      style={info(`${element.name} info`)}
                    >
                      {superpowerInfo(element.name)}
                    </div>
                  </div>
                </div>

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
              <div
                className="changeProfesionBtnRight"
                onClick={changeFrontRight}
                style={btnStyle(element.name)}
              >
                <img src={right} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="finishChooseCharacter">
        <div className="inputNameContainer">
          <div className="inputName">NICK:</div>
          <input type="text" name="nick" onChange={onChange} value={name} />
        </div>
        {name.length !== 0 && store.profesion !== "" ? (
          <Link to="/give-skills">
            <button onClick={() => dispatch(changeName(name))}>
              Next step!
            </button>
          </Link>
        ) : (
          <div className="emptyDiv"></div>
        )}
      </div>
    </div>
  );
}
export default ChooseCharacter;
