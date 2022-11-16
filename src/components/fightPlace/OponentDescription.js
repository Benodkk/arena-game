import oponents from "../../database/oponents";
import { useSelector } from "react-redux";
import useOponentMove from "../../hooks/useOponentMove";
import { useEffect } from "react";

function OponentDescription() {
  const store = useSelector((state) => state);
  const oponentAttack = useOponentMove();

  // Oponent make a move when user change his energy or defense

  useEffect(() => {
    setTimeout(() => {
      oponentAttack();
    }, 2000);
  }, [store.skills[1].amount, store.parameters.energy]);

  return (
    <div className="oponentDescriptionContainer">
      <div>
        <div>Health: {store.oponentParameters.health}</div>
        <div>Energy: {store.oponentParameters.energy}</div>
      </div>
      <div className="oponentDescription">
        <div>Name: {store.oponentName}</div>
        <div>Level: {store.oponentLevel}</div>
        <div>Attack: {store.oponentSkils.attack}</div>
        <div>Defense: {store.oponentSkils.defense}</div>
        <div>Vitality: {store.oponentSkils.vitality}</div>
      </div>
    </div>
  );
}

export default OponentDescription;
