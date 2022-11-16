import { useSelector, useDispatch } from "react-redux";
import profesion from "../../database/profesion";
import useUserMove from "../../hooks/useUserMove";

function UserDescription() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const move = useUserMove();

  return (
    <div className="UserDescriptionContainer">
      <div>
        <div className="defenseButtons">
          <button onClick={() => move("deff")}>Deff</button>
          <button onClick={() => move("rest")}>Rest</button>
        </div>
        <div className="attackButton">
          <button onClick={() => move("strong")}>Strong Attack!</button>
          <button onClick={() => move("normal")}>Normal Attack!</button>
          <button onClick={() => move("light")}>Light Attack!</button>
          <button
            onClick={() =>
              move(profesion.find((x) => x.name == store.profesion).superpower)
            }
          >
            {profesion.find((x) => x.name == store.profesion).superpower}
          </button>
        </div>
      </div>
      <div className="userSkills">
        <div>
          <div>Health: {store.parameters.health}</div>
          <div>Energy: {Math.round(store.parameters.energy)}</div>
        </div>
        <div className="userDescription">
          <div>Name: {store.name}</div>
          <div>Level: {store.level}</div>
          <div>Attack: {store.skills[0].amount}</div>
          <div>Defense: {store.skills[1].amount}</div>
          <div>Vitality: {store.skills[2].amount}</div>
        </div>
      </div>
    </div>
  );
}

export default UserDescription;
