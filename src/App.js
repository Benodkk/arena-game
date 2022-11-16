import ChooseCharacter from "./pages/ChooseCharacter";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <ChooseCharacter />
    </div>
  );
}

export default App;
