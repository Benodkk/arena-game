import { useDispatch, useSelector } from "react-redux";
import { oChangeEnergy } from "../redux/oponent/oParameters";
import { oGiveDefense } from "../redux/oponent/oSkills";
import { changeHealth } from "../redux/user/parameters";
import { useState } from "react";
import { makeMove } from "../redux/user/move";

function useOponentMove() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [superpowerUsed, setSuperpowerUsed] = useState(0);
  //   OPONENT's ATTACK

  function oponentsAttack() {
    //  superpower decides if computer use superpower

    let superpower = Math.random();

    let superpowerNow;
    //   power of first hand weapon

    let oponentsPower = 0;

    if (store.oponentItems.armed.firstHand.length > 1) {
      oponentsPower =
        store.oponentItems.armed.firstHand[0] +
        Math.floor(
          (store.oponentItems.armed.firstHand[1] -
            store.oponentItems.armed.firstHand[0] +
            1) *
            Math.random()
        );
    } else {
      oponentsPower = store.oponentItems.armed.firstHand[0];
    }

    //   power of second hand weapon
    let oponentsSecondPower = 0;

    if (store.oponentItems.armed.secondHand.stat.length > 1) {
      oponentsSecondPower =
        store.oponentItems.armed.secondHand.stat[0] +
        Math.floor(
          (store.oponentItems.armed.secondHand.stat[1] -
            store.oponentItems.armed.secondHand.stat[0] +
            1) *
            Math.random()
        );
    } else {
      oponentsSecondPower = store.oponentItems.armed.secondHand.stat[0];
    }
    //   attack damage
    let oponentAttack;
    if (
      // use Fatal strike
      superpower < 0.5 &&
      store.oponentSuperpower == "Fatal strike" &&
      superpowerUsed == 0 &&
      store.oponentParameters.energy > 10
    ) {
      oponentAttack = store.oponentSkils.attack * 2 + oponentsPower * 2.5;
      setSuperpowerUsed(2);
      superpowerNow = true;
      dispatch(makeMove(["+ Fatal strike"]));
    } else {
      oponentAttack =
        store.oponentSkils.attack * 2 +
        oponentsPower * 2.5 -
        store.skills[1].amount * 1.5;
    }

    if (store.items.armed.secondHand.type == "shield") {
      if (store.oponentItems.armed.secondHand.type == "shield") {
        oponentAttack -= store.items.armed.secondHand.defense * 2;
      } else {
        oponentAttack +=
          (oponentsSecondPower - store.items.armed.secondHand.defense) * 2;
      }
    } else {
      if (store.oponentItems.armed.secondHand.type == "second weapon") {
        oponentAttack += oponentsSecondPower * 2;
      }
    }

    // when attack damage is below 1, set attack on 1 so damage will not be on minus

    if (oponentAttack < 1) {
      oponentAttack = 1;
    }

    // nr decides if hit hits or miss,
    //  whichAttack decides what move computer will make

    let whichAttack = Math.random();
    let nr = Math.random();

    // cant make some attacks when energy is below of certain level

    if (store.oponentParameters.energy < 15) {
      whichAttack = whichAttack / 2;
    } else if (store.oponentParameters.energy < 25) {
      whichAttack = whichAttack / 1.25;
    }

    // what move oponent do?

    // super power is a available

    if (superpowerUsed == 1) {
      // counterattack use in previous tour
      oponentAttack += oponentAttack;
      setSuperpowerUsed(2);
    }
    if (
      // use Giant smash
      superpowerUsed == 0 &&
      superpower < 0.5 &&
      store.oponentSuperpower == "Giant smash"
    ) {
      oponentAttack += 2 * store.oponentSkils.vitality;
      setSuperpowerUsed(2);
      dispatch(makeMove(["+ Giant smash"]));
    }

    function move() {
      if (
        // use Counterattack
        superpowerUsed == 0 &&
        superpower < 0.5 &&
        store.oponentParameters.energy < 85 &&
        store.oponentSuperpower == "Counterattack"
      ) {
        dispatch(oChangeEnergy(15));
        dispatch(oGiveDefense(0.5));
        setSuperpowerUsed(1);
        dispatch(makeMove(["+ Counterattack"]));
      } else {
        if (store.oponentParameters.energy < 10) {
          // Oponent have no energy, have to rest or deff
          let deffOrRest = Math.random();
          if (deffOrRest < 0.5) {
            dispatch(oChangeEnergy(25));
            dispatch(makeMove(["oRest"]));
          } else {
            dispatch(oChangeEnergy(15));
            dispatch(oGiveDefense(0.5));
            move();
            dispatch(makeMove(["oDefense"]));
          }
        } else {
          // oponent have energy so he attack
          if (whichAttack < 0.5) {
            dispatch(oChangeEnergy(-10));
          } else if (whichAttack >= 0.5 && whichAttack < 0.8) {
            dispatch(oChangeEnergy(-15));
          } else if (whichAttack >= 0.8) {
            dispatch(oChangeEnergy(-25));
          }
          if (whichAttack < 0.5 && nr < 0.9) {
            dispatch(changeHealth(-Math.round(oponentAttack)));
            dispatch(makeMove(["oAttack", Math.round(oponentAttack)]));
          } else if (whichAttack >= 0.5 && whichAttack < 0.8 && nr < 0.7) {
            dispatch(changeHealth(-Math.round(oponentAttack * 2)));
            dispatch(makeMove(["oAttack", Math.round(oponentAttack * 2)]));
          } else if (whichAttack >= 0.8 && nr < 0.37) {
            dispatch(changeHealth(-Math.round(oponentAttack * 5)));
            dispatch(makeMove(["oAttack", Math.round(oponentAttack * 5)]));
          } else {
            dispatch(makeMove(["oBlock"]));
          }
        }
      }
    }

    // this timeout gives time for superpower animation to run
    if (superpowerNow == true) {
      setTimeout(() => {
        move();
      }, 1000);
    } else {
      move();
    }
  }

  return oponentsAttack;
}

export default useOponentMove;
