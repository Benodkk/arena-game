import { Link } from "react-router-dom";
import useStartFight from "../hooks/useStartFight";

function Arena() {
  const start = useStartFight();
  return (
    <div>
      <Link to="/fight">
        <button onClick={start}>Arena fight!</button>
      </Link>
      <Link to="/tournament">
        <button>Tournament!</button>
      </Link>
      <Link to="/menu">
        <button>Menu</button>
      </Link>
    </div>
  );
}

export default Arena;
