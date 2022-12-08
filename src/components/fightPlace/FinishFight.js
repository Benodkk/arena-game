import { Link } from "react-router-dom";

function FinishFight({ nextStep, leaveFight, fightStyle, endFight }) {
  return (
    <div className="finishFightContainer" style={fightStyle}>
      <div className="blackOut"></div>
      <div className="fightFinished">
        <img className="endFightImg" src={endFight} />
        <Link to={nextStep}>
          <button onClick={() => leaveFight()}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FinishFight;
