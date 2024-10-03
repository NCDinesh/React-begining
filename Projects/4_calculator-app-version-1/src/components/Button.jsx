import styles from "./Button.module.css";

let Button = ({ handleOnClick }) => {
  let button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {button.map((item) => (
        <button className={styles.button} onClick={() => handleOnClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
