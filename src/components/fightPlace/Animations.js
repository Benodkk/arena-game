import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import shield from "../../database/images/shield.png";
import rest from "../../database/images/rest.png";
import attack from "../../database/images/attack.png";

function Animations() {
  const store = useSelector((state) => state);

  const [defStyle, setDefStyle] = useState({});
  const [restStyle, setRestStyle] = useState({});
  const [attackStyle, setAttackStyle] = useState({});
  const [dmgStyle, setDmgStyle] = useState({});
  const [blockStyle, setBlockStyle] = useState({});
  const [superpowerStyle, setSuperpowerStyle] = useState({});

  useEffect(() => {
    if (store.move[0] == "defense") {
      setDefStyle({
        animation: "2s defense 1",
      });
    }
    if (store.move[0] == "rest") {
      setRestStyle({
        animation: "2s defense",
      });
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
    }
    if (store.move[0] == "Giant smash" || store.move[0] == "Fatal strike") {
      setSuperpowerStyle({
        animation: "1.5s superpower",
      });
    }
    setTimeout(() => {
      setDefStyle({});
      setRestStyle({});
      setAttackStyle({});
      setDmgStyle({});
      setBlockStyle({});
      setSuperpowerStyle({});
    }, 2000);
    console.log(store.move);
  }, [store.move]);
  return (
    <div className="animationsContainer">
      <img className="defenseAnimation" style={defStyle} src={shield} />
      <img className="defenseAnimation" style={restStyle} src={rest} />
      <img className="attackAnimation" style={attackStyle} src={attack} />
      <div className="dmgAnimation" style={dmgStyle}>
        -{store.move[1]}
      </div>
      <img className="oponentBlockAnimation" style={blockStyle} src={shield} />
      <div className="superpowerAnimation" style={superpowerStyle}>
        + {store.move[0]}!
      </div>
    </div>
  );
}
export default Animations;
