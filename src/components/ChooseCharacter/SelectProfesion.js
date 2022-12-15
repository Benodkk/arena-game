import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  chooseBrute,
  chooseAssassin,
  chooseWarrior,
} from "../../redux/user/giveSkills";

import profesion from "../../database/profesion";
import left from "../../database/images/left.png";
import right from "../../database/images/right.png";
import question from "../../database/images/icons/question-mark.png";

function SelectProfesion() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [front, setFront] = useState(["Brute", "Warrior", "Assassin"]);

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
        zIndex: "1",
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

  // make background of character type yellow when character selected

  function nameStyle(e) {
    if (e == store.profesion) {
      return {
        backgroundColor: "rgba(255, 255, 100, 0.8)",
      };
    }
  }

  // show superpower info on question mark hover

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

  return (
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
              <img alt="left" src={left} />
            </div>
            <div className="oneProfesion">
              <div className="profesionName" style={nameStyle(element.name)}>
                {element.name}
              </div>
              <img
                alt="character look"
                className="characterLook"
                src={element.img}
              />
              <div className="profesionSkills">
                {element.skills.map((x) => {
                  return (
                    <div key={x.name} className="oneSkill">
                      <img alt={x.name} src={x.img} />
                      <div>
                        {x.name}: {x.amount}
                      </div>
                    </div>
                  );
                })}
                <div className="profesionSuperpower">
                  <div>Superpower: {element.superpower}</div>
                  <img
                    alt="superpower info trigger"
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
                    {element.superpowerDescription}
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
              <img alt="right" src={right} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectProfesion;
