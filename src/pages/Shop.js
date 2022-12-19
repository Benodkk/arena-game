import React, { useState } from "react";

import SelectType from "../components/Shop/SelectType";

import items from "../database/items";
import SliderContainer from "../components/Shop/SliderContainer";

function Shop() {
  const [display, setDisplay] = useState(items.weapon);

  function showWeapons() {
    setDisplay(items.weapon);
  }

  function showShields() {
    setDisplay(items.shields);
  }

  function showSecondWeapons() {
    setDisplay(items.secondWeapon);
  }

  return (
    <div className="shopContainer">
      <SelectType
        showWeapons={showWeapons}
        showShields={showShields}
        showSecondWeapons={showSecondWeapons}
      />
      <SliderContainer display={display} />
    </div>
  );
}

export default Shop;
