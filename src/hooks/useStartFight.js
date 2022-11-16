import user from "../database/user";
import oponents from "../database/oponents";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { oChangeName } from "../redux/oponent/oName";
import { oSetLevel } from "../redux/oponent/oLvl";
import { oSetItems } from "../redux/oponent/oItems";
import { oSetSkills } from "../redux/oponent/oSkills";
import { oChangeHealth, oSetParameters } from "../redux/oponent/oParameters";
import { changeHealth, setParameters } from "../redux/user/parameters";

function useStartFight() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const oponent = oponents[2];

  function start() {
    // Set oponent

    dispatch(oChangeName(oponent.name));
    dispatch(oSetLevel(oponent.lvl));
    dispatch(oSetItems(oponent.items));
    dispatch(oSetSkills(oponent.skills));
    dispatch(oSetParameters(oponent.parameters));
    dispatch(oChangeHealth(oponent.skills.vitality));

    //   Set User

    dispatch(setParameters(user.parameters));
    dispatch(changeHealth(store.skills[2].amount));
  }

  return start;
}

export default useStartFight;
