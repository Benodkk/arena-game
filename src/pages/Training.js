import { useDispatch, useSelector } from "react-redux";
import {
  giveAttack,
  giveDefense,
  giveVitality,
} from "../redux/user/giveSkills";
import { Link } from "react-router-dom";
import { changeMoney } from "../redux/user/money";

function Training() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  function giveSkill(skill) {
    if (store.money >= 100) {
      dispatch(changeMoney(-100));
      if (skill == "Attack") {
        dispatch(giveAttack());
      } else if (skill == "Defense") {
        dispatch(giveDefense());
      } else if (skill == "Vitality") {
        dispatch(giveVitality());
      }
    } else {
      console.log("no money");
    }
  }
  return (
    <div>
      <button onClick={() => giveSkill("Attack")}>Train Attack!</button>
      <button onClick={() => giveSkill("Defense")}>Train Defense!</button>
      <button onClick={() => giveSkill("Vitality")}>Train Vitality!</button>
      <Link to="/menu">
        <button>Menu</button>
      </Link>
      <div>My money: {store.money}</div>
      <div>Each training cost: 100</div>
    </div>
  );
}

export default Training;
