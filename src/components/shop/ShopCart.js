import items from "../../database/items";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toBackpack } from "../../redux/user/items";
import { changeMoney } from "../../redux/user/money";
import { Link } from "react-router-dom";
import left from "../../database/images/left.png";
import right from "../../database/images/right.png";
import coin from "../../database/images/coin.png";

function ShopCart() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(items.weapon);

  function showWeapons() {
    setDisplay(items.weapon);
    setMoveLeft(0);
    setSlidesWeapons(0);
  }

  function showShields() {
    setDisplay(items.shields);
    setMoveLeft(0);
    setSlidesWeapons(0);
  }

  function showSecondWeapons() {
    setDisplay(items.secondWeapon);
    setMoveLeft(0);
    setSlidesWeapons(0);
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

  // diffrent element width for shields

  let elementStyle;
  let weaponImgStyle;
  if (display == items.shields) {
    elementStyle = {
      width: "7.5vw",
    };
    weaponImgStyle = {
      maxWidth: "7.5vw",
    };
  }

  const [moveLeft, setMoveLeft] = useState(0);
  const [slidesWeapons, setSlidesWeapons] = useState(0);

  let onSlideClick = {
    position: "relative",
    left: moveLeft + "vw",
  };

  function slideLeft() {
    if (slidesWeapons !== 0) {
      setMoveLeft(moveLeft + 50);
      setSlidesWeapons(slidesWeapons - 1);
    }
  }

  function slideRight() {
    if (slidesWeapons < 3 && display == items.weapon) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (slidesWeapons < 2 && display == items.shields) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (slidesWeapons < 2 && display == items.secondWeapon) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    }
  }

  return (
    <div className="shopContainer">
      <div className="topContent">
        <Link to="/menu" className="backToMenuBtn">
          <img src={left} />
        </Link>
        <div className="selectionName">SHOP</div>
        <div className="moneyContainer">
          <div>Money:</div>
          <div>{store.money}</div>
          <img src={coin} />
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={showWeapons}>Weapons</button>
        <button onClick={showShields}>Shields</button>
        <button onClick={showSecondWeapons}>Second Weapons</button>
      </div>
      <div className="sliderContainer">
        <img className="slide" src={left} onClick={slideLeft} />
        <div className="overflowContainer">
          <div className="offerContainer" style={onSlideClick}>
            {display.map((element) => {
              return (
                <div
                  key={element.id}
                  className="elementCart"
                  style={elementStyle}
                >
                  <img
                    src={element.img}
                    id={element.id}
                    className="weaponImg"
                    style={weaponImgStyle}
                  />
                  <div id={element.id} className="itemInfo">
                    <div className="itemName">{element.name}</div>
                    <div className="itemStats">
                      {element.type == "First weapon" ||
                      element.type == "second weapon"
                        ? element.attack.length == 1
                          ? `Attack: ${element.attack[0]}`
                          : `Attack: ${element.attack[0]} - ${element.attack[1]}`
                        : `Defense: ${element.defense}`}
                    </div>
                    <div className="itemCost">cost: {element.cost}</div>
                    <div className="itemLvl">level:{element.lvl}</div>
                    <button id={element.id} onClick={buyItem}>
                      BUY
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img className="slide" src={right} onClick={slideRight} />
      </div>
    </div>
  );
}

export default ShopCart;
