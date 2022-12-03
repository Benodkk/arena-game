import oponents from "../../database/oponents";
import { useSelector } from "react-redux";
import useOponentMove from "../../hooks/useOponentMove";
import { useEffect, useState } from "react";
import health from "../../database/images/health.png";
import energy from "../../database/images/energy.png";
import attack from "../../database/images/attack.png";
import shield from "../../database/images/shield.png";

function OponentDescription() {
  const store = useSelector((state) => state);
  const oponentAttack = useOponentMove();

  const [firstMove, setFirstMove] = useState(false);

  const oponentImg = oponents.find((x) => x.name == store.oponentName).img;

  // Oponent make a move when user change his energy or defense

  useEffect(() => {
    setFirstMove(true);
    if (firstMove && store.oponentParameters.health > 0) {
      setTimeout(() => {
        oponentAttack();
      }, 2000);
    }
  }, [store.skills[1].amount, store.parameters.energy]);

  return (
    <div className="oponentDescriptionContainer">
      <img className="oponentImg" src={oponentImg} />
      <div className="userSkillsContainer">
        <div className="healthContainer">
          <div className="parametr">
            <img src={health} />
            <div>Health: {store.oponentParameters.health}</div>
          </div>
          <div className="parametr">
            <img src={energy} />
            <div>Energy: {store.oponentParameters.energy}</div>
          </div>
        </div>
        <div className="userDescription">
          <div>Name: {store.oponentName}</div>
          <div>Level: {store.oponentLevel}</div>
          <div className="parametr">
            <img src={attack} />
            <div>Attack: {store.oponentSkils.attack}</div>
          </div>
          <div className="parametr">
            <img src={shield} />
            <div>Defense: {store.oponentSkils.defense}</div>
          </div>
          <div className="parametr">
            <img src={health} />
            <div>Vitality: {store.oponentSkils.vitality}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OponentDescription;
