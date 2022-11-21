import items from "../../database/items";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toBackpack } from "../../redux/user/items";
import { changeMoney } from "../../redux/user/money";
import { Link } from "react-router-dom";

function ShopCart() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);
  const [display, setDisplay] = useState(items.weapon);

  //   const [itemInfoStyle, setItemInfoStyle] = useState({
  //     visibility: "hidden",
  //   });

  //   let itemCarts = Array.from(document.querySelectorAll(".elementCart"));

  //   console.log(itemCarts);
  function hide(id) {
    // let itemCarts = Array.from(document.querySelectorAll(".itemInfo"));
    // let itemCart = itemCarts.find((x) => x.id == id);
    // console.log(itemCart);
    // itemCart.style.visibility = "hidden";
    // setItemInfoStyle({
    //   visibility: "hidden",
    // });
  }

  function show(e) {
    // let itemCarts = Array.from(document.querySelectorAll(".itemInfo"));
    // let itemCart = itemCarts.find((x) => x.id == e.target.id);
    // itemCart.style.visibility = "visible";
    // setItemInfoStyle({
    //   visibility: "visible",
    // });
  }

  function buyItem(e) {
    let item =
      items.weapon.find((x) => x.id == e.target.id) ||
      items.shields.find((x) => x.id == e.target.id) ||
      items.secondWeapon.find((x) => x.id == e.target.id);
    if (store.money >= item.cost) {
      dispatch(changeMoney(-item.cost));
      dispatch(toBackpack(item));
    }
  }

  return (
    <div>
      <button onClick={() => setDisplay(items.weapon)}>Weapons</button>
      <button onClick={() => setDisplay(items.shields)}>Shields</button>
      <button onClick={() => setDisplay(items.secondWeapon)}>
        Second Weapons
      </button>
      <div>My money: {store.money}</div>
      <div>
        {display.map((element) => {
          return (
            <div key={element.id} className="elementCart">
              <div id={element.id} onMouseEnter={show}>
                Will be image
              </div>
              <div
                id={element.id}
                className="itemInfo"
                onMouseLeave={() => hide(element.id)}
                //   style={{ visibility: "hidden" }}
              >
                <div className="itemName">{element.name}</div>
                <div className="itemCost">{element.cost}</div>
                <div className="itemLvl">level:{element.lvl}</div>
                <button id={element.id} onClick={buyItem}>
                  BUY
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/menu">
        <button>MENU</button>
      </Link>
    </div>
  );
}

export default ShopCart;
