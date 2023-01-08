import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { firstHand, secondHand, toBackpack } from "../../redux/user/items";
import { changeMoney } from "../../redux/user/money";

import items from "../../database/items";
import left from "../../database/images/left.png";
import right from "../../database/images/right.png";

function SliderContainer({ display }) {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const owned = { transform: "translate(-100%)" };
  const notOwnedInfo = { transform: "translate(0%)" };

  const [moveLeft, setMoveLeft] = useState(0);
  const [slidesWeapons, setSlidesWeapons] = useState(0);
  const [notification, setNotification] = useState("");

  // diffrent element width for shields

  let elementStyle;
  let weaponImgStyle;
  if (display === items.shields) {
    elementStyle = {
      width: "7.5vw",
    };
    weaponImgStyle = {
      maxWidth: "7.5vw",
    };
  }

  // slider of items

  const onSlideClick = {
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
    if (
      slidesWeapons < items.weapon.length / 5 - 1 &&
      display === items.weapon
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (
      slidesWeapons < items.shields.length / 4 - 1 &&
      display === items.shields
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    } else if (
      slidesWeapons < items.secondWeapon.length / 5 - 1 &&
      display === items.secondWeapon
    ) {
      setMoveLeft(moveLeft - 50);
      setSlidesWeapons(slidesWeapons + 1);
    }
  }

  useEffect(() => {
    setMoveLeft(0);
    setSlidesWeapons(0);
  }, [display]);

  function showNotification(element, type) {
    if (notification[0] === element.id) {
      if (type === notification[1]) {
        return {
          transform: "translateY(0vh)",
        };
      }
    }
  }

  //  after 3 seconds hide notification

  const [timer, setTimer] = useState("");

  const runTimer = () => {
    const timeout = setTimeout(() => {
      setNotification([""]);
    }, 3000);
    setTimer(timeout);
  };

  function buyItem(elementId) {
    clearTimeout(timer);
    runTimer();

    let item =
      items.weapon.find((x) => x.id === elementId) ||
      items.shields.find((x) => x.id === elementId) ||
      items.secondWeapon.find((x) => x.id === elementId);

    if (
      store.money >= item.cost &&
      store.level >= item.lvl &&
      store.items.backpack.some((x) => x.id === item.id) === false
    ) {
      dispatch(changeMoney(-item.cost));
      dispatch(toBackpack(item));
      setNotification([item.id, "bought"]);
      if (item.type === "First weapon") {
        dispatch(firstHand(item));
      } else {
        dispatch(secondHand(item));
      }
    } else if (store.items.backpack.some((x) => x.id === item.id)) {
      setNotification([item.id, "owned"]);
    } else if (store.level < item.lvl) {
      setNotification([item.id, "level"]);
    } else if (store.money < item.cost) {
      setNotification([item.id, "money"]);
    }
  }
  return (
    <div className="sliderContainer">
      <img alt="left" className="slide" src={left} onClick={slideLeft} />
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
                  alt={element.name}
                  src={element.img}
                  id={element.id}
                  className="weaponImg"
                  style={weaponImgStyle}
                />
                <div className="itemNotificationContainer">
                  <div
                    className="itemBoughtNotification"
                    style={showNotification(element, "bought")}
                  >
                    You bought item!
                  </div>
                  <div
                    className="itemMoneyNotification"
                    style={showNotification(element, "money")}
                  >
                    You need {element.cost} coins to buy this item.
                  </div>
                  <div
                    className="itemLevelNotification"
                    style={showNotification(element, "level")}
                  >
                    You need {element.lvl} level to buy this item.
                  </div>
                  <div
                    className="itemOwnedNotification"
                    style={showNotification(element, "owned")}
                  >
                    You already have this item.
                  </div>
                </div>
                <div id={element.id} className="itemInfo">
                  <div className="itemName">{element.name}</div>
                  <div className="itemStats">
                    {element.type === "First weapon" ||
                    element.type === "second weapon"
                      ? element.attack.length === 1
                        ? `Attack: ${element.attack[0]}`
                        : `Attack: ${element.attack[0]} - ${element.attack[1]}`
                      : `Defense: ${element.defense}`}
                  </div>
                  <div
                    className="itemCost"
                    style={
                      store.items.backpack.find((x) => x.id === element.id)
                        ? owned
                        : notOwnedInfo
                    }
                  >
                    <div className="itemNotOwned">Cost: {element.cost}</div>
                    <div className="itemOwned">Owned</div>
                  </div>
                  <div className="itemLvl">level: {element.lvl}</div>
                  <button onClick={() => buyItem(element.id)}>BUY</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <img alt="right" className="slide" src={right} onClick={slideRight} />
    </div>
  );
}

export default SliderContainer;
