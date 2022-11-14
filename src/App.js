import ChooseCharacter from "./pages/ChooseCharacter";
import { firstHand } from "./redux/items";
import { useSelector, useDispatch } from "react-redux";
import { changeMoney } from "./redux/money";
import { loss } from "./redux/stats";
function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <ChooseCharacter /> */}
      <div>{store.stats.wins}</div>
      <button
        onClick={() => {
          dispatch(loss());
        }}
      ></button>
    </div>
  );
}

export default App;
