import ChooseCharacter from "./pages/ChooseCharacter";
import { useSelector, useDispatch } from "react-redux";
import ShopCart from "./components/shop/ShopCart";
import Menu from "./pages/Menu";
function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Menu />
    </div>
  );
}

export default App;
