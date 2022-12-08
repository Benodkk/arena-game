import { Link } from "react-router-dom";
import useStartFight from "../hooks/useStartFight";
import fight from "../database/images/fight.png";
import tournament from "../database/images/tournament.png";
import left from "../database/images/left.png";

function Arena() {
  const start = useStartFight();
  return (
    <div className="arenaContainer">
      <Link className="backToMenuBtn" to="/menu">
        <img src={left} />
      </Link>
      <div className="selectionName">Arena</div>
      <div className="fightContainer">
        <div className="linkContainer ">
          <Link to="/fight">
            <img onClick={start} src={fight} />
          </Link>
          <div className="linkLabel">ARENA FIGHT</div>
        </div>
        <div className="linkContainer as">
          <Link to="/tournament">
            <img src={tournament} />
          </Link>
          <div className="linkLabel">TOURNAMENT</div>
        </div>
      </div>
    </div>
  );
}

export default Arena;
