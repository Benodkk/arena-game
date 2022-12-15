import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import shield from "../../database/images/shield.png";
import rest from "../../database/images/rest.png";
import dead from "../../database/images/dead.png";
import straightSword from "../../database/images/straight-sword.png";

function Animations() {
  const store = useSelector((state) => state);

  // states for user move animations

  const [defStyle, setDefStyle] = useState({});
  const [restStyle, setRestStyle] = useState({});
  const [attackStyle, setAttackStyle] = useState({});
  const [dmgStyle, setDmgStyle] = useState({});
  const [blockStyle, setBlockStyle] = useState({});
  const [superpowerStyle, setSuperpowerStyle] = useState({});
  const [fullEnergy, setFullEnergy] = useState({});
  const [noEnergy, setNoEnergy] = useState({});

  // states for oponent move animations

  const [oDefStyle, setODefStyle] = useState({});
  const [oRestStyle, setORestStyle] = useState({});
  const [oAttackStyle, setOAttackStyle] = useState({});
  const [oDmgStyle, setODmgStyle] = useState({});
  const [oBlockStyle, setOBlockStyle] = useState({});
  const [oSuperpowerStyle, setOSuperpowerStyle] = useState({});

  useEffect(() => {
    // Animations for user move

    if (store.move[0] == "defense") {
      setDefStyle({
        animation: "2s defense 1",
      });
      setTimeout(() => {
        setDefStyle({});
      }, 2000);
    }
    if (store.move[0] == "rest") {
      setRestStyle({
        animation: "2s defense",
      });
      setTimeout(() => {
        setRestStyle({});
      }, 2000);
    }
    if (store.move[0] == "attack") {
      setAttackStyle({
        animation: "1s attack",
      });
      setTimeout(() => {
        setDmgStyle({
          animation: "1s dmg",
        });
      }, 600);
      setTimeout(() => {
        setAttackStyle({});
        setDmgStyle({});
      }, 2000);
    }
    if (store.move[0] == "block") {
      setAttackStyle({
        animation: "1s attack",
      });
      setTimeout(() => {
        setBlockStyle({
          animation: "1.3s block",
        });
      }, 550);
      setTimeout(() => {
        setAttackStyle({});
        setBlockStyle({});
      }, 2000);
    }
    if (store.move[0] == "Giant smash" || store.move[0] == "Fatal strike") {
      setSuperpowerStyle({
        animation: "1.5s superpower",
      });
      setTimeout(() => {
        setSuperpowerStyle({});
      }, 1500);
    }
    if (store.move[0] == "Counterattack") {
      setSuperpowerStyle({
        animation: "1.5s superpower",
      });
      setDefStyle({
        animation: "2s defense 1",
      });
      setTimeout(() => {
        setSuperpowerStyle({});
        setDefStyle({});
      }, 2000);
    }
    if (store.move[0] == "full energy") {
      setFullEnergy({
        animation: "1.5s superpower",
      });
      setTimeout(() => {
        setFullEnergy({});
      }, 1500);
    }
    if (store.move[0] == "no energy") {
      setNoEnergy({
        animation: "1.5s superpower",
      });
      setTimeout(() => {
        setNoEnergy({});
      }, 1500);
    }

    // animations for oponent move

    if (store.move[0] == "oDefense") {
      setODefStyle({
        animation: "2s oDefense",
      });
      setTimeout(() => {
        setODefStyle({});
      }, 2000);
    }
    if (store.move[0] == "oRest") {
      setORestStyle({
        animation: "2s oDefense",
      });
      setTimeout(() => {
        setORestStyle({});
      }, 2000);
    }
    if (store.move[0] == "oAttack") {
      setOAttackStyle({
        animation: "1s oAttack",
      });
      setTimeout(() => {
        setODmgStyle({
          animation: "1s oDmg",
        });
      }, 600);
      setTimeout(() => {
        setOAttackStyle({});
        setODmgStyle({});
      }, 2000);
    }
    if (store.move[0] == "oBlock") {
      setOAttackStyle({
        animation: "1s oAttack",
      });
      setTimeout(() => {
        setOBlockStyle({
          animation: "1.3s oBlock",
        });
      }, 550);
      setTimeout(() => {
        setOAttackStyle({});
        setOBlockStyle({});
      }, 2000);
    }
    if (store.move[0] == "+ Giant smash" || store.move[0] == "+ Fatal strike") {
      setOSuperpowerStyle({
        animation: "1.5s oSuperpower",
      });
      setTimeout(() => {
        setOSuperpowerStyle({});
      }, 1500);
    }
    if (store.move[0] == "+ Counterattack") {
      setOSuperpowerStyle({
        animation: "1.5s oSuperpower",
      });
      setODefStyle({
        animation: "2s oDefense",
      });
      setTimeout(() => {
        setOSuperpowerStyle({});
        setODefStyle({});
      }, 2000);
    }
  }, [store.move]);

  // animation for a loser

  const [oDeadStyle, setODeadStyle] = useState({});
  const [deadStyle, setdeadStyle] = useState({});

  useEffect(() => {
    if (store.parameters.health <= 0) {
      setTimeout(() => {
        setdeadStyle({
          animation: "dead 0.4s ease-in",
          opacity: 1,
          visibility: "visible",
          transform: "scale(1)",
        });
      }, 1000);
    }
    if (store.oponentParameters.health <= 0) {
      setTimeout(() => {
        setODeadStyle({
          animation: "oDead 0.4s ease-in",
          opacity: 1,
          visibility: "visible",
          transform: "scale(1)",
        });
      }, 1000);
    }
  }, [store.parameters.health, store.oponentParameters.health]);

  return (
    <div className="animationsContainer">
      {/* user move animations */}
      <img
        alt="defense animation"
        className="defenseAnimation"
        style={defStyle}
        src={shield}
      />
      <img
        alt="defense animation"
        className="defenseAnimation"
        style={restStyle}
        src={rest}
      />
      <img
        alt="attack animation"
        className="attackAnimation"
        style={attackStyle}
        src={straightSword}
      />
      <div className="dmgAnimation" style={dmgStyle}>
        -{store.move[1]}
      </div>
      <div className="denyAnimation" style={fullEnergy}>
        Energy full!
      </div>
      <div className="denyAnimation" style={noEnergy}>
        No energy!
      </div>
      <img
        alt="defense animation"
        className="oponentBlockAnimation"
        style={blockStyle}
        src={shield}
      />
      <div className="superpowerAnimation" style={superpowerStyle}>
        + {store.move[0]}!
      </div>
      <img
        alt="dead animation "
        className="deadAnimation"
        src={dead}
        style={deadStyle}
      />

      {/* oponent move animations */}
      <img
        alt="defense animation"
        className="oDefenseAnimation"
        style={oDefStyle}
        src={shield}
      />
      <img
        alt="defense animation"
        className="oDefenseAnimation"
        style={oRestStyle}
        src={rest}
      />
      <img
        alt="attack animation"
        className="oAttackAnimation"
        style={oAttackStyle}
        src={straightSword}
      />
      <div className="oDmgAnimation" style={oDmgStyle}>
        -{store.move[1]}
      </div>
      <img
        alt="block animation"
        className="oUserBlockAnimation"
        style={oBlockStyle}
        src={shield}
      />
      <div className="oSuperpowerAnimation" style={oSuperpowerStyle}>
        + {store.oponentSuperpower}!
      </div>
      <img
        alt="dead animation"
        className="oDeadAnimation"
        src={dead}
        style={oDeadStyle}
      />
    </div>
  );
}
export default Animations;
