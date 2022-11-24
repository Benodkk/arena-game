import items from "../database/items";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstHand, secondHand, toBackpack } from "../redux/user/items";
import { changeMoney } from "../redux/user/money";
import { Link } from "react-router-dom";
import left from "../database/images/left.png";
import right from "../database/images/right.png";
import coin from "../database/images/coin.png";

function MyItems() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [display, setDisplay] = useState(
    store.items.backpack.filter((x) => x.type == "First weapon")
  );

  function showWeapons() {
    setDisplay(store.items.backpack.filter((x) => x.type == "First weapon"));
    setMoveLeft(0);
    setSlidesWeapons(0);
  }

  function showShields() {
    setDisplay(store.items.backpack.filter((x) => x.type == "shield"));
    setMoveLeft(0);
    setSlidesWeapons(0);
  }

  function showSecondWeapons() {
    if (store.items.backpack.some((x) => x.type == "second weapon")) {
      setDisplay(store.items.backpack.filter((x) => x.type == "second weapon"));
      setMoveLeft(0);
      setSlidesWeapons(0);
    }
  }

  function armItem(e) {
    let item =
      items.weapon.find((x) => x.id == e.target.id) ||
      items.shields.find((x) => x.id == e.target.id) ||
      items.secondWeapon.find((x) => x.id == e.target.id);
    if (item.type == "First Hand") {
      dispatch(firstHand(item));
    } else {
      dispatch(secondHand(item));
    }
  }

  // diffrent element width for shields

  let elementStyle;
  let weaponImgStyle;
  if (display[0].type == "shield") {
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
    console.log(display.length % 5);
    if (
      slidesWeapons < display.lenth / 5 &&
      display == store.items.backpack.filter((x) => x.type == "First weapon")
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (
      slidesWeapons < display.lenth / 5 &&
      display == store.items.backpack.filter((x) => x.type == "shield")
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (
      slidesWeapons < display.lenth / 4 &&
      display == store.items.backpack.filter((x) => x.type == "second weapon")
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    }
  }

  return (
    <div className="myItemsContainer">
      <div className="topContentMyItems">
        <Link to="/user">
          <img src={left} />
        </Link>
        <div className="selectionName">MY ITEMS</div>
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
                    <div className="itemLvl">level:{element.lvl}</div>
                    <button id={element.id} onClick={armItem}>
                      ARM
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

export default MyItems;
