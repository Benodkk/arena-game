import { useDispatch, useSelector } from "react-redux";
import OponentDescription from "../components/fightPlace/OponentDescription";
import UserDescription from "../components/fightPlace/UserDescription";

function FightPlace() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);

  return (
    <div className="fightPlaceContainer">
      <UserDescription />
      <OponentDescription />
    </div>
  );
}

export default FightPlace;
