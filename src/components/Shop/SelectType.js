import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import left from "../../database/images/left.png";
import coin from "../../database/images/coin.png";

function SelectType({ showWeapons, showShields, showSecondWeapons }) {
  const store = useSelector((state) => state);
  return (
    <div className="selectType">
      <div className="topContent">
        <Link to="/menu" className="backToMenuBtn">
          <img alt="back to menu" src={left} />
        </Link>
        <div className="selectionName">SHOP</div>
        <div className="moneyContainer">
          <div>Money:</div>
          <div>{store.money}</div>
          <img alt="coin" src={coin} />
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={() => showWeapons()}>Weapons</button>
        <button onClick={() => showShields()}>Shields</button>
        <button onClick={() => showSecondWeapons()}>Second Weapons</button>
      </div>
    </div>
  );
}

export default SelectType;
