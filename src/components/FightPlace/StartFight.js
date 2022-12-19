import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import vs from "../../database/images/vs.png";

function StartFight() {
  const store = useSelector((state) => state);

  const [firstFightAnimation, setFirstFightAnimation] = useState({});
  const [startAnimation, setStartAnimation] = useState({});
  const [containerAnimation, setContainerAnimation] = useState({});

  useEffect(() => {
    setFirstFightAnimation({
      opacity: 1,
    });
    setTimeout(() => {
      setStartAnimation({
        opacity: 1,
        transform: "scale(1)",
      });
      setFirstFightAnimation({
        opacity: 0,
        transition: "0.5s",
      });
    }, 3000);
    setTimeout(() => {
      setContainerAnimation({
        opacity: 0,
        transition: "0.7s",
      });
    }, 5500);
    setTimeout(() => {
      setContainerAnimation({
        opacity: 0,
        display: "none",
        transition: "0s",
      });
    }, 6200);
  }, []);
  return (
    <div className="startFightContainer" style={containerAnimation}>
      <div className="blackOut"></div>
      <div className="timeToStartFight" style={firstFightAnimation}>
        Time for your {store.stats.fights + 1} fight!
      </div>
      <div className="fightStart" style={startAnimation}>
        <img alt="oponents name" className="vs" src={vs} />
        <div className="namesContainer">
          <div className="name1">{store.name}</div>
          <div className="name2">{store.oponentName}</div>
        </div>
      </div>
    </div>
  );
}

export default StartFight;
