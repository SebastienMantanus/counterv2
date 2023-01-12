import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ counter, setCounter }) => {
  return (
    <div className="counters">
      <div>
        <FontAwesomeIcon icon="minus" size="3x" />
      </div>
      <div className="couterState">{counter}</div>
      <div>
        <FontAwesomeIcon
          icon="plus"
          size="3x"
          onClick={() => {
            const counter2 = [...counter];
          }}
        />
      </div>
    </div>
  );
};

export default Counter;
