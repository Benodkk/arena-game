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
// import OponentDescription from "../components/FightPlace/OponentDescription";
// import UserDescription from "../components/FightPlace/UserDescription";
// import Animations from "../components/FightPlace/Animations";
// import FinishFight from "../components/FightPlace/FinishFight";
// import UserMakeMove from "../components/FightPlace/UserMakeMove";
// import StartFight from "../components/FightPlace/StartFight";

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
