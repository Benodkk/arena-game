import { useDispatch, useSelector } from "react-redux";
import { oChangeName } from "../redux/oponent/oName";
import { oSetLevel } from "../redux/oponent/oLvl";
import { oSetItems } from "../redux/oponent/oItems";
import { oSetSkills } from "../redux/oponent/oSkills";
import { oChangeHealth, oSetParameters } from "../redux/oponent/oParameters";
import { changeHealth, setParameters } from "../redux/user/parameters";
import { oSuperpower } from "../redux/oponent/oSuperpower";
import { makeMove } from "../redux/user/move";

import user from "../database/user";
import oponents from "../database/oponents";

function useStartFight() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const oponent = oponents[store.stats.fights];

  function start() {
    // Set oponent

    dispatch(oChangeName(oponent.name));
    dispatch(oSetLevel(oponent.lvl));
    dispatch(oSetItems(oponent.items));
    dispatch(oSetSkills(oponent.skills));
    dispatch(oSetParameters(oponent.parameters));
    dispatch(oChangeHealth(oponent.skills.vitality));
    dispatch(oSuperpower(oponent.superpower));

    //   Set User

    dispatch(setParameters(user.parameters));
    dispatch(changeHealth(store.skills[2].amount));

    dispatch(makeMove([]));
  }

  return start;
}

export default useStartFight;
