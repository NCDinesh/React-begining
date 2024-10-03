import styles from "./Fooditem.module.css";
let Foodinput = ({ handleOnKeydown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onKeyDown={handleOnKeydown}></input>
  );
};
export default Foodinput;
