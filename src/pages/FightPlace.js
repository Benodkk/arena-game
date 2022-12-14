import React, { lazy, Suspense } from "react";

import Loading from "../components/Loading";

const OponentDescription = lazy(() =>
  import("../components/FightPlace/OponentDescription")
);
const UserDescription = lazy(() =>
  import("../components/FightPlace/UserDescription")
);
const Animations = lazy(() => import("../components/FightPlace/Animations"));
const FinishFight = lazy(() => import("../components/FightPlace/FinishFight"));
const UserMakeMove = lazy(() =>
  import("../components/FightPlace/UserMakeMove")
);
const StartFight = lazy(() => import("../components/FightPlace/StartFight"));

function FightPlace() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="fightPlaceContainer">
        <div className="duringFight">
          <div className="userFightContainer">
            <UserMakeMove />
            <UserDescription />
          </div>
          <OponentDescription />
        </div>
        <StartFight />
        <FinishFight />
        <Animations />
      </div>
    </Suspense>
  );
}

export default FightPlace;
