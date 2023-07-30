import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import styles from "./Counter.module.css"
const Counter = () => {
  const [count, setCount] = useState(0);

  const third = () => {
    setCount(count + 1);
  };

  const fourth = () => {
    setCount(count - 1);
  };
  return (
    <div>
    <p className={styles.center}><b>Count: {count}</b></p>
      <Buttons incrementButtonClick={third} decrementButtonClick={fourth} />
    </div>
  );
};

export default Counter;
