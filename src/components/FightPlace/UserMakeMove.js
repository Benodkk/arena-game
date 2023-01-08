import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import useUserMove from "../../hooks/useUserMove";

import profesion from "../../database/profesion";
import lightAttack from "../../database/images/lightAttack.png";
import mediumAttack from "../../database/images/mediumAttack.png";
import strongAttack from "../../database/images/strongAttack.png";
import superpower from "../../database/images/superpower.png";
import rest from "../../database/images/rest.png";
import shield from "../../database/images/shield.png";

function UserMakeMove() {
  const store = useSelector((state) => state);
  const move = useUserMove();

  const characterLook = profesion.find((x) => x.name === store.profesion).img;
  const userSuperpower = profesion.find(
    (x) => x.name === store.profesion
  ).superpower;

  const [ifSuperpowerUsed, setIfSuperpowerUser] = useState(false);
  const [showSuperpowerInfo, setShowSuperpowerInfo] = useState(false);
  const [superpowerOpacity, setSuperpowerOpacity] = useState(1);
  const [superpowerInfoStyle, setSuperpowerInfoStyle] = useState({});
  const [wait, setWait] = useState(true);

  // If superpower used change opacity of superpower button
  // and make superpower info visible on superpower button hover

  function superpowerUsed() {
    setSuperpowerOpacity(0.2);
    setIfSuperpowerUser(true);
  }

  useEffect(() => {
    if (showSuperpowerInfo === true && ifSuperpowerUsed === true) {
      setSuperpowerInfoStyle({
        opacity: 1,
        visibility: "visible",
      });
    } else {
      setSuperpowerInfoStyle({
        opacity: 0,
        visibility: "hidden",
      });
    }
  }, [showSuperpowerInfo]);

  // user have to wait for his turn after making move

  // this useEffect trigger on user energy change or user deffense change,
  // because every user move changes energy or deffense

  useEffect(() => {
    setWait(false);
  }, [store.skills[1].amount, store.parameters.energy]);

  //  user can move 2 seconds after oponent move
  //  2 seconds because thats how long the longest animation of opponent move takes

  //  this useEffect trigger on opponent energy change,
  //  because every move changes energy

  useEffect(() => {
    setTimeout(() => {
      setWait(true);
    }, 2000);
  }, [store.oponentParameters.energy]);
  function makeMove(type) {
    if (wait && type !== userSuperpower) {
      move(type);
    }
    if (wait && ifSuperpowerUsed === false && type === userSuperpower) {
      superpowerUsed();
      move(userSuperpower);
    }
  }

  return (
    <div className="actionsContainer">
      <div className="defenseButtons">
        <div className="actionButton">
          <img
            alt="deffensive move"
            src={shield}
            onClick={() => makeMove("deff")}
          />
          <div>Defense</div>
        </div>
        <div className="actionButton">
          <img alt="rest move" src={rest} onClick={() => makeMove("rest")} />
          <div>Rest</div>
        </div>
      </div>
      <img
        alt="character look"
        className="characterFightImg"
        src={characterLook}
      />
      <div className="attackButtonsContainer">
        <div className="attackButtons">
          <div className="actionButton">
            <img
              alt="strong attack"
              src={strongAttack}
              onClick={() => makeMove("strong")}
            />
            <div>Strong</div>
          </div>
          <div className="actionButton">
            <img
              alt="normal attack"
              src={mediumAttack}
              onClick={() => makeMove("normal")}
            />
            <div>Medium</div>
          </div>
          <div className="actionButton">
            <img
              alt="light attack"
              src={lightAttack}
              onClick={() => makeMove("light")}
            />
            <div>Light</div>
          </div>
          <div className="superpowerButton">
            <div className="actionButton">
              <img
                alt="superpower move"
                src={superpower}
                style={{ opacity: superpowerOpacity }}
                onMouseOver={() => setShowSuperpowerInfo(true)}
                onMouseLeave={() => setShowSuperpowerInfo(false)}
                onClick={() => makeMove(userSuperpower)}
              />
              <div>
                {profesion.find((x) => x.name === store.profesion).superpower}
              </div>
            </div>
            <div style={superpowerInfoStyle} className="superpowerUsed">
              You can use{" "}
              {profesion.find((x) => x.name === store.profesion).superpower}{" "}
              only once.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMakeMove;
