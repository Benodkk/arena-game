import { useDispatch, useSelector } from "react-redux";
import {
  chooseBrute,
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";
import { Link } from "react-router-dom";
import { changeMoney } from "../redux/user/money";
import profesion from "../database/profesion";
import left from "../database/images/left.png";
import coin from "../database/images/coin.png";

function Training() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  function giveSkill(skill) {
    if (store.money >= 100) {
      dispatch(changeMoney(-100));
      if (skill == "Attack") {
        dispatch(giveAttack());
      } else if (skill == "Defense") {
        dispatch(giveDefense());
      } else if (skill == "Vitality") {
        dispatch(giveVitality());
      }
    } else {
      console.log("no money");
    }
  }

  const character = profesion.find((x) => x.name == store.profesion).img;

  return (
    <div className="trainingContainer">
      <div className="topContent">
        <Link to="/menu">
          <img src={left} />
        </Link>
        <div className="selectionName">TRAINING</div>
        <div className="moneyContainer">
          <div>Money:</div>
          <div>{store.money}</div>
          <img src={coin} />
        </div>
      </div>
      <div className="userNameContainer">
        <div className="userName">{store.name}</div>
        <img src={character} />
      </div>
      <div className="currentSkills">
        <div className="moneyContainer">
          <div>Each training cost 100</div>
          <img src={coin} />
        </div>
        {store.skills.map((element) => {
          return (
            <div key={element.name} className="oneSkill">
              <img src={element.img} />
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
