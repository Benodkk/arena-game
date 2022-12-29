import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../redux/user/userName";

function SelectNick() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  function onChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="finishChooseCharacter">
      <div className="inputNameContainer">
        <div className="inputName">NICK:</div>
        <input
          type="text"
          name="nick"
          onChange={onChange}
          value={name}
          maxLength="15"
        />
      </div>
      {name.length !== 0 && store.profesion !== "" ? (
        <Link className="nextStep" to="/give-skills">
          <button onClick={() => dispatch(changeName(name))}>Next step!</button>
        </Link>
      ) : (
        <div className="emptyDiv"></div>
      )}
    </div>
  );
}

export default SelectNick;
