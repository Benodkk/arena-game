import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import profesion from "../database/profesion";
import left from "../database/images/left.png";
import levels from "../database/levels";

function User() {
  const store = useSelector((state) => state);

  const characterImage = profesion.find((x) => x.name === store.profesion).img;

  return (
    <div className="userContainer">
      <div className="userDescriptionContainer">
        <Link to="/menu" className="backToMenuBtn">
          <img alt="back to menu" src={left} />
        </Link>
        <div className="userInfo">
          <div className="userImage">
            <div className="userNameContainer">
              <div className="userName">{store.name}</div>
            </div>
            <img alt="character look" src={characterImage} />
          </div>
          <div className="userDescription">
            <div>Level: {store.level}</div>
            <div>
              Experience: {store.exp}/
              {levels.find((x) => x.level === store.level).promotion}
            </div>
            <div>Money: {store.money}</div>
            <div>Profesion: {store.profesion}</div>
            <div>Fights: {store.stats.fights}</div>
            <div>Wins: {store.stats.wins}</div>
            <div>Losses: {store.stats.loses}</div>
          </div>
        </div>
      </div>
      <div className="opinionsAndSkills">
        <div className="skills">
          Skills:
          {store.skills.map((element) => {
            return (
              <div key={element.name} className="userSkills">
                <img alt={element.name} src={element.img} />
                <div>
                  {element.name}: {element.amount}
                </div>
              </div>
            );
          })}
        </div>
        <div className="opinions">
          Opinions:
          <div>aggeressiveness: {store.opinions.aggressiveness}</div>
          <div>brutality: {store.opinions.brutality}</div>
          <div>winner: {store.opinions.winner}</div>
        </div>
      </div>
      <div className="itemsContainer">
        <div>First hand: {store.items.armed.firstHand.name}</div>
        <div>Second hand: {store.items.armed.secondHand.name}</div>
        <Link to="/user/my-items">
          <button>My items</button>
        </Link>
      </div>
    </div>
  );
}
export default User;
