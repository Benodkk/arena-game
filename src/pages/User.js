import { useDispatch, useSelector } from "react-redux";
import { firstHand } from "../redux/user/items";
import { secondHand } from "../redux/user/items";

function User() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  function arm(element) {
    if (element.type == "First weapon") {
      dispatch(firstHand(element));
    } else {
      dispatch(secondHand(element));
    }
  }

  return (
    <div>
      <div className="userDescription">
        <div>Name: {store.name}</div>
        <div>Level: {store.level}</div>
        <div>Experience: {store.exp}</div>
        <div>Money: {store.money}</div>
        <div>Profesion: {store.profesion}</div>
        <div>
          Skills:
          {store.skills.map((element) => {
            return (
              <div key={element.name}>
                {element.name}: {element.amount}
              </div>
            );
          })}
        </div>
        <div>
          Opinions:
          <div>Aggeressiveness: {store.opinions.aggressiveness}</div>
          <div>Brutality: {store.opinions.brutality}</div>
          <div>Winner: {store.opinions.winner}</div>
        </div>
        <div>
          <div>First hand: {store.items.armed.firstHand.name}</div>
          <div>Second hand: {store.items.armed.secondHand.name}</div>
        </div>
        <div>
          Items in store:
          <div>
            {store.items.backpack.map((element) => {
              return (
                <div key={element.id}>
                  <div>{element.name}</div>
                  <div>
                    {element.attack[0]} - {element.attack[1]}
                    {element.defense}
                  </div>
                  <button onClick={() => arm(element)}>Arm!</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
