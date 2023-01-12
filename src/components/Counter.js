import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = ({ index, counter, setCounter }) => {
  return (
    <div className="resetAlign">
      <div className="counters">
        <div className="divCounters">
          {counter[index] > 0 && (
            <FontAwesomeIcon
              icon="minus"
              size="3x"
              onClick={() => {
                const counter2 = [...counter];
                counter2[index] = counter2[index] - 1;
                setCounter(counter2);
              }}
            />
          )}
        </div>
        <div className="couterState">{counter[index]}</div>
        <div className="divCounters">
          {counter[index] < 10 && (
            <FontAwesomeIcon
              icon="plus"
              size="3x"
              onClick={() => {
                const counter2 = [...counter];
                counter2[index] = counter2[index] + 1;
                setCounter(counter2);
              }}
            />
          )}
        </div>
      </div>
      <input
        className="resetButton"
        type="submit"
        value="Reset"
        onClick={() => {
          const counter2 = [...counter];
          counter2[index] = 0;
          setCounter(counter2);
        }}
      />
    </div>
  );
};

export default Counter;
