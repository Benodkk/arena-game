import { Link } from "react-router-dom";
import { useState } from "react";

import { useSelector } from "react-redux";

import useStartFight from "../hooks/useStartFight";

import fight from "../database/images/fight.png";
import tournament from "../database/images/tournament.png";
import left from "../database/images/left.png";

function Arena() {
  const store = useSelector((state) => state);

  const start = useStartFight();

  const [infoStyle, setInfoStyle] = useState(0);

  function tournamentStyle() {
    if (store.level < 3) {
      return {
        opacity: "0.5",
      };
    }
  }

  return (
    <div className="arenaContainer">
      <Link className="backToMenuBtn" to="/menu">
        <img alt="back to menu" src={left} />
      </Link>
      <div className="selectionName">Arena</div>
      <div className="fightContainer">
        <div className="linkContainer ">
          <Link to="/fight">
            <img alt="start fight" onClick={start} src={fight} />
          </Link>
          <div className="linkLabel">ARENA FIGHT</div>
        </div>
        <div className="linkContainer tournamentLink">
          <Link
            // to="/tournament"
            style={tournamentStyle()}
            onMouseOver={() => setInfoStyle(1)}
            onMouseLeave={() => setInfoStyle(0)}
          >
            <img alt="tournament" src={tournament} />
          </Link>
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
