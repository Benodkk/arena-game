import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";
import { changeMoney } from "../redux/user/money";

import profesion from "../database/profesion";
import left from "../database/images/left.png";
import coin from "../database/images/coin.png";

function Training() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const characterImage = profesion.find((x) => x.name === store.profesion).img;

  function giveSkill(skill) {
    if (store.money >= 100) {
      dispatch(changeMoney(-100));
      if (skill === "attack") {
        dispatch(giveAttack());
      } else if (skill === "defense") {
        dispatch(giveDefense());
      } else if (skill === "vitality") {
        dispatch(giveVitality());
      }
    } else {
      console.log("no money");
    }
  }

  return (
    <div className="trainingContainer">
      <div className="topContent">
        <Link to="/menu" className="backToMenuBtn">
          <img alt="back to menu" src={left} />
        </Link>
        <div className="selectionName">TRAINING</div>
        <div className="moneyContainer">
          <div>Money:</div>
          <div>{store.money}</div>
          <img alt="coin" src={coin} />
        </div>
      </div>
      <div className="userNameContainer">
        <div className="userName">{store.name}</div>
        <img
          alt="character look"
          className="characterImage"
          src={characterImage}
        />
      </div>
      <div className="currentSkills">
        <div className="moneyContainer">
          <div>Each training cost 100</div>
          <img alt="coin" src={coin} />
        </div>
        {store.skills.map((element) => {
          return (
            <div key={element.name} className="oneSkill">
              <img alt={element.name} src={element.img} />
              <div>{element.name}:</div>
              <div>{element.amount}</div>
              <button
                onClick={() => {
                  giveSkill(element.name);
                }}
              >
                +1
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Training;
