import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OponentDescription from "../components/fightPlace/OponentDescription";
import UserDescription from "../components/fightPlace/UserDescription";
import { resetDefense } from "../redux/user/giveSkills";

function FightPlace() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);

  // reset deff after fight

  const [defChanged, setDefChanged] = useState(false);
  const [currentDef, setCurrentDef] = useState(0);

  if (defChanged == false) {
    setDefChanged(true);
    setCurrentDef(store.skills[1].amount);
  }
  console.log(currentDef);

  // when win and defeat

  if (store.parameters.health <= 0) {
    console.log("lose");
  }
  if (store.oponentParameters.health <= 0) {
    console.log("win");
  }

  return (
    <div className="fightPlaceContainer">
      <UserDescription />
      <OponentDescription />
      <button
        onClick={() => {
          dispatch(resetDefense(currentDef));
          setDefChanged(false);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default FightPlace;
