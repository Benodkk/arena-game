import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import useBlackScreenOn from "../hooks/useBlackScreenOn";
import useStartFight from "../hooks/useStartFight";

import fight from "../database/images/fight.png";
import tournament from "../database/images/tournament.png";
import left from "../database/images/left.png";

function Arena() {
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  const [blackStyle, goBlack] = useBlackScreenOn();
  const start = useStartFight();

  const [infoStyle, setInfoStyle] = useState(0);

  function tournamentStyle() {
    if (store.level < 3) {
      return {
        opacity: "0.5",
      };
    }
  }

  function goFight() {
    goBlack();
    setTimeout(() => {
      navigate("/fight");
    }, 1000);
    start();
  }

  return (
    <div className="arenaContainer">
      <div style={blackStyle}></div>
      <Link className="backToMenuBtn" to="/menu">
        <img alt="back to menu" src={left} />
      </Link>
      <div className="selectionName">Arena</div>
      <div className="fightContainer">
        <div className="linkContainer ">
          <img alt="start fight" onClick={goFight} src={fight} />
          <div className="linkLabel">ARENA FIGHT</div>
        </div>
        <div className="linkContainer tournamentLink">
          <img // to="/tournament"
            style={tournamentStyle()}
            onMouseOver={() => setInfoStyle(1)}
            onMouseLeave={() => setInfoStyle(0)}
            alt="tournament"
            src={tournament}
          />
          <div className="linkLabel">TOURNAMENT</div>
          <div className="tournamentInfo" style={{ opacity: infoStyle }}>
            You need level 3 to participate in tournament.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arena;
