import React from "react";
import { Link } from "react-router-dom";

import arena from "../database/images/arena.png";
import shop from "../database/images/shop.png";
import training from "../database/images/training.png";
import user from "../database/images/user.png";

function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuLinks">
        <div className="menuLinkContainer">
          <Link to="/shop">
            <img alt="shop" src={shop} />
          </Link>
          <div className="linkLabel">SHOP</div>
        </div>
        <div className="menuLinkContainer">
          <Link to="/arena">
            <img alt="arena" src={arena} />
          </Link>
          <div className="linkLabel">ARENA</div>
        </div>
        <div className="menuLinkContainer">
          <Link to="/training">
            <img alt="training" src={training} />
          </Link>
          <div className="linkLabel">TRAINING</div>
        </div>
        <div className="menuLinkContainer" id="menuLinkContainerUser">
          <Link to="/user">
            <img alt="user" src={user} />
          </Link>
          <div className="linkLabel">USER</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
