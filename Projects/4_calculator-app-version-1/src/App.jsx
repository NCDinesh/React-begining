import Display from "./components/Display";
import styles from "./App.module.css";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let [calval, setcalval] = useState("");

  let handleOnClick = (item) => {
    console.log(item);
    if (item === "C") {
      setcalval("");
    } else if (item === "=") {
      let result = eval(calval);
      setcalval(result);
    } else {
      let newdisplayvalue = calval + item;
      setcalval(newdisplayvalue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <Button handleOnClick={handleOnClick}></Button>
    </div>
  );
}

export default App;
