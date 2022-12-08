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
import question from "../../database/images/icons/question-mark.png";
import { useEffect, useState } from "react";

function UserDescription() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const move = useUserMove();

  const character = profesion.find((x) => x.name == store.profesion).img;

  const userSuperpower = profesion.find(
    (x) => x.name == store.profesion
  ).superpower;
  // when superpower used

  const [ifSuperpowerUsed, setIfSuperpowerUser] = useState(false);
  const [superpowerOpacity, setSuperpowerOpacity] = useState(1);
  const [showSuperpowerInfo, setShowSuperpowerInfo] = useState(false);
  const [superpowerInfoStyle, setSuperpowerInfoStyle] = useState({});

  function superpowerUsed() {
    setSuperpowerOpacity(0.2);
    setIfSuperpowerUser(true);
  }

  useEffect(() => {
    if (showSuperpowerInfo == true && ifSuperpowerUsed == true) {
      setSuperpowerInfoStyle({
        opacity: 1,
        visibility: "visible",
      });
    } else {
      setSuperpowerInfoStyle({
        opacity: 0,
        visibility: "hidden",
      });
    }
  }, [showSuperpowerInfo]);

  const [wait, setWait] = useState(true);

  function makeMove(type) {
    if (wait && type !== userSuperpower) {
      move(type);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setWait(true);
    }, 2000);
  }, [store.oponentParameters.energy]);

  useEffect(() => {
    setWait(false);
  }, [store.parameters.energy]);

  return (
    <div className="userFightContainer">
      <div className="actionsContainer">
        <div className="defenseButtons">
          <div className="actionButton">
            <img src={shield} onClick={() => makeMove("deff")} />
            <div>Defense</div>
          </div>
          <div className="actionButton">
            <img src={rest} onClick={() => makeMove("rest")} />
            <div>Rest</div>
          </div>
        </div>
        <img src={character} />
        <div className="attackButtonsContainer">
          <div className="attackButtons">
            <div className="actionButton">
              <img src={strongAttack} onClick={() => makeMove("strong")} />
              <div>Strong</div>
            </div>
            <div className="actionButton">
              <img src={mediumAttack} onClick={() => makeMove("normal")} />
              <div>Medium</div>
            </div>
            <div className="actionButton">
              <img src={lightAttack} onClick={() => makeMove("light")} />
              <div>Light</div>
            </div>
            <div className="superpowerButton">
              <div className="actionButton">
                <img
                  src={superpower}
                  style={{ opacity: superpowerOpacity }}
                  onMouseOver={() => setShowSuperpowerInfo(true)}
                  onMouseLeave={() => setShowSuperpowerInfo(false)}
                  onClick={() => {
                    if (ifSuperpowerUsed == false) {
                      superpowerUsed();
                      makeMove(userSuperpower);
                    }
                  }}
                />
                <div>
                  {profesion.find((x) => x.name == store.profesion).superpower}
                </div>
              </div>
              <div style={superpowerInfoStyle} className="superpowerUsed">
                You can use{" "}
                {profesion.find((x) => x.name == store.profesion).superpower}{" "}
                only once.
              </div>
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
