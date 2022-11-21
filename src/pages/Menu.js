import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="menuContainer">
      <Link to="/shop">
        <button>SHOP</button>
      </Link>
      <Link to="/arena">
        <button>ARENA</button>
      </Link>
      <Link to="/user">
        <button>USER</button>
      </Link>
      <Link to="/training">
        <button>TRAINING</button>
      </Link>
    </div>
  );
}

export default Menu;
