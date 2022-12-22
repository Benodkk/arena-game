import React, { useState, Suspense } from "react";

// const SelectType = React.lazy(() => import("../components/Shop/SelectType"));
// const SliderContainer = React.lazy(() =>
//   import("../components/Shop/SliderContainer")
// );
import SelectType from "../components/Shop/SelectType";
import SliderContainer from "../components/Shop/SliderContainer";

import items from "../database/items";

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
      <Suspense fallback={<div>asdasdasd</div>}>
        <SelectType
          showWeapons={showWeapons}
          showShields={showShields}
          showSecondWeapons={showSecondWeapons}
        />
        <SliderContainer display={display} />
      </Suspense>
    </div>
  );
}

export default Shop;
