import { useDispatch, useSelector } from "react-redux";
import { changeEnergy, setEnergy } from "../redux/user/parameters";
import { giveDefense } from "../redux/user/giveSkills";
import { oChangeHealth } from "../redux/oponent/oParameters";
import { useState } from "react";

function useUserMove() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [superpower, setSuperpower] = useState("");
  const [superpowerUsed, setSuperpowerUsed] = useState(false);

  //   USER's ATTACKS

  function userAttack(type) {
    if (store.parameters.health > 0) {
      //   power of first hand weapon

      let power = 0;
      if (store.items.armed.firstHand.attack.length > 1) {
        power =
          store.items.armed.firstHand.attack[0] +
          Math.floor(
            (store.items.armed.firstHand.attack[1] -
              store.items.armed.firstHand.attack[0] +
              1) *
              Math.random()
          );
      } else {
        power = store.items.armed.firstHand.attack[0];
      }

      //   power of second hand weapon

      let secondPower = 0;
      if (store.items.armed.secondHand.type == "second weapon") {
        if (store.items.armed.secondHand.attack.length > 1) {
          secondPower =
            store.items.armed.secondHand.attack[0] +
            Math.floor(
              (store.items.armed.secondHand.attack[1] -
                store.items.armed.secondHand.attack[0] +
                1) *
                Math.random()
            );
        } else {
          secondPower = store.items.armed.secondHand.attack[0];
        }
      }

      // attack damage

      let attack;

      // ommit oponent defense when fatal strike used

      if (superpower == "Fatal strike") {
        attack = store.skills[0].amount * 2 + power * 2.5;
      } else {
        attack =
          store.skills[0].amount * 2 +
          power * 2.5 -
          store.oponentSkils.defense * 1.5;
      }

      if (store.items.armed.secondHand.type == "shield") {
        if (store.oponentItems.armed.secondHand.type == "shield") {
          attack -= store.oponentItems.armed.secondHand.stat[0] * 2;
        }
      } else {
        if (store.oponentItems.armed.secondHand.type == "shield") {
          attack +=
            (secondPower - store.oponentItems.armed.secondHand.stat[0]) * 2;
        } else {
          attack += secondPower * 2;
        }
      }

      // when attack damage is below 1, set attack on 1 so damage will not be on minus

      if (attack < 1) {
        attack = 1;
      }

      // nr decides if hit hits or miss

      let nr = Math.random();

      // what move user do?
      if (type == "light" && store.parameters.energy >= 10) {
        dispatch(changeEnergy(-10));
      } else if (type == "normal" && store.parameters.energy >= 15) {
        dispatch(changeEnergy(-15));
      } else if (type == "strong" && store.parameters.energy >= 25) {
        dispatch(changeEnergy(-25));
      } else if (type == "rest") {
        if (store.parameters.energy >= 75) {
          dispatch(setEnergy());
        } else {
          dispatch(changeEnergy(25));
        }
      } else if (type == "deff") {
        dispatch(giveDefense(0.5));
        if (store.parameters.energy >= 85) {
          dispatch(setEnergy());
        } else {
          dispatch(changeEnergy(15));
        }
      } else if (type == "Giant smash" && superpowerUsed == false) {
        setSuperpower("Giant smash");
        setSuperpowerUsed(true);
      } else if (type == "Counterattack" && superpowerUsed == false) {
        setSuperpower("Counterattack");
        dispatch(giveDefense(0.5));
        setSuperpowerUsed(true);
        if (store.parameters.energy >= 85) {
          dispatch(setEnergy());
        } else {
          dispatch(changeEnergy(15));
        }
      } else if (type == "Fatal strike" && superpowerUsed == false) {
        setSuperpower("Fatal strike");
        setSuperpowerUsed(true);
      } else if (
        type == "Fatal strike" ||
        "Counterattack" ||
        ("Giant smash" && superpowerUsed == true)
      ) {
        console.log("you can use superpower only once");
      } else {
        console.log("no energy");
      }

      // When superpower was used

      if (superpower == "Giant smash") {
        attack += 2 * store.skills[2].amount;
      } else if (superpower == "Counterattack") {
        attack += attack;
      }

      if (type == "light" && store.parameters.energy > 10) {
        if (nr < 0.9) {
          dispatch(oChangeHealth(-Math.round(attack)));
        } else {
          console.log("miss");
        }
        setSuperpower("");
      } else if (type == "normal" && store.parameters.energy > 15) {
        if (nr < 0.7) {
          dispatch(oChangeHealth(-Math.round(attack * 2)));
        } else {
          console.log("miss");
        }
        setSuperpower("");
      } else if (type == "strong" && store.parameters.energy > 25) {
        if (nr < 0.37) {
          dispatch(oChangeHealth(-Math.round(attack * 5)));
        } else {
          console.log("miss");
        }
        setSuperpower("");
      }
    }
  }

  return userAttack;
}

export default useUserMove;
