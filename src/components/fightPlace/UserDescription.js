import { useSelector, useDispatch } from "react-redux";
import profesion from "../../database/profesion";
import useUserMove from "../../hooks/useUserMove";
import lightAttack from "../../database/images/lightAttack.png";
import mediumAttack from "../../database/images/mediumAttack.png";
import strongAttack from "../../database/images/strongAttack.png";
import superpower from "../../database/images/superpower.png";
import rest from "../../database/images/rest.png";
import shield from "../../database/images/shield.png";
import health from "../../database/images/health.png";
import energy from "../../database/images/energy.png";

function UserDescription() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const move = useUserMove();

  const character = profesion.find((x) => x.name == store.profesion).img;

  return (
    <div className="userFightContainer">
      <div className="actionsContainer">
        <div className="defenseButtons">
          <div className="actionButton">
            <img src={shield} onClick={() => move("deff")} />
            <div>Defense</div>
          </div>
          <div className="actionButton">
            <img src={rest} onClick={() => move("rest")} />
            <div>Rest</div>
          </div>
        </div>
        <img src={character} />
        <div className="attackButtons">
          <div className="actionButton">
            <img src={strongAttack} onClick={() => move("strong")} />
            <div>Strong</div>
          </div>
          <div className="actionButton">
            <img src={mediumAttack} onClick={() => move("normal")} />
            <div>Medium</div>
          </div>
          <div className="actionButton">
            <img src={lightAttack} onClick={() => move("light")} />
            <div>Light</div>
          </div>
          <div className="actionButton">
            <img
              src={superpower}
              onClick={() =>
                move(
                  profesion.find((x) => x.name == store.profesion).superpower
                )
              }
            />
            <div>
              {profesion.find((x) => x.name == store.profesion).superpower}
            </div>
          </div>
        </div>
      </div>
      <div className="userSkillsContainer">
        <div className="healthContainer">
          <div className="parametr">
            <img src={health} />
            <div>Health: {store.parameters.health}</div>
          </div>
          <div className="parametr">
            <img src={energy} />
            <div>Energy: {Math.round(store.parameters.energy)}</div>
          </div>
        </div>
        <div className="userDescription">
          <div>Name: {store.name}</div>
          <div>Level: {store.level}</div>
          <div className="skills">
            {store.skills.map((element) => {
              return (
                <div key={element.name} className="userSkills">
                  <img src={element.img} />
                  <div>
                    {element.name}: {element.amount}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDescription;
