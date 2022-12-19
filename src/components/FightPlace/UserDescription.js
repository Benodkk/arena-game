import React, { useSelector } from "react-redux";

import health from "../../database/images/health.png";
import energy from "../../database/images/energy.png";

function UserDescription() {
  const store = useSelector((state) => state);

  return (
    <div className="userSkillsContainer">
      <div className="healthContainer">
        <div className="parametr">
          <img alt="health" src={health} />
          <div>Health: {store.parameters.health}</div>
        </div>
        <div className="parametr">
          <img alt="energy" src={energy} />
          <div>Energy: {store.parameters.energy}</div>
        </div>
      </div>
      <div className="userDescription">
        <div>Name: {store.name}</div>
        <div>Level: {store.level}</div>
        <div className="skills">
          {store.skills.map((element) => {
            return (
              <div key={element.name} className="userSkills">
                <img alt={element.name} src={element.img} />
                <div>
                  {element.name}: {element.amount}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserDescription;
