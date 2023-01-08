import { useDispatch, useSelector } from "react-redux";
import { changeMoney } from "../redux/user/money";
import { giveExp } from "../redux/user/exp";
import { levelUp } from "../redux/user/level";
import { resetExp } from "../redux/user/exp";
import { loss, win } from "../redux/user/stats";

import levels from "../database/levels";

function useLeaveFight() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  function leaveFight() {
    // Win or lose

    if (store.parameters.health <= 0) {
      dispatch(giveExp(100));
      dispatch(loss());
    }
    if (store.oponentParameters.health <= 0) {
      dispatch(giveExp(100));
      dispatch(changeMoney(100));
      dispatch(win());
    }

    // if level up

    let lvl = levels.find((x) => x.level === store.level);
    if (store.level === lvl.level && store.exp === lvl.promotion - 100) {
      dispatch(levelUp());
      dispatch(resetExp());
    }
  }

  return leaveFight;
}

export default useLeaveFight;
