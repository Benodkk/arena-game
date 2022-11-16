import { useDispatch, useSelector } from "react-redux";
import { oChangeEnergy } from "../redux/oponent/oParameters";
import { oGiveDefense } from "../redux/oponent/oSkills";
import { changeHealth } from "../redux/user/parameters";

function useOponentMove() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  //   OPONENT's ATTACK

  function oponentsAttack() {
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

    let oponentAttack =
      store.oponentSkils.attack * 2 +
      oponentsPower * 2.5 -
      store.skills[1].amount * 1.5;

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

    // when attack damage is below 1

    if (oponentAttack < 1) {
      oponentAttack = 1;
    }

    // nr decides if hit hits or miss,
    //  whichAttack decides what move computer will make

    let whichAttack = Math.random();
    let nr = Math.random();

    // cant make some attacks when energy is below of certain level

    if (store.parameters.energy < 15) {
      whichAttack = whichAttack / 2;
    } else if (store.parameters.energy < 25) {
      whichAttack = whichAttack / 1.25;
    }

    // what move oponent do?

    if (store.parameters.energy < 10) {
      // Oponent have no energy, have to rest or deff
      let deffOrRest = Math.random();
      console.log(deffOrRest);
      if (deffOrRest < 0.5) {
        dispatch(oChangeEnergy(25));
      } else {
        dispatch(oChangeEnergy(15));
        dispatch(oGiveDefense(0.5));
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
      } else if (whichAttack >= 0.5 && whichAttack < 0.8 && nr < 0.7) {
        dispatch(changeHealth(-Math.round(oponentAttack * 2)));
      } else if (whichAttack >= 0.8 && nr < 0.37) {
        dispatch(changeHealth(-Math.round(oponentAttack * 5)));
      } else {
        console.log("miss");
      }
    }
  }

  return oponentsAttack;
}

export default useOponentMove;
