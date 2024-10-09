import style1 from "./Button.module.css";
import styles from "./Individualitem.module.css";
let Individualitem = ({ indiitems, bought, handleBuyButton }) => {
  // const handlebuybutton = (item, event) => {
  //   console.log(`${item} buy `);
  //   console.log(event);
  // };
  return (
    <ul className="list-group">
      {indiitems.map((item) => (
        <li
          key={item}
          className={`${styles["kg-item"]} list-group-item ${
            bought && "active"
          }`}>
          <span className={styles["kg-span"]}>
            {item}
            <button
              className={`${style1.button} btn btn-info`}
              // onClick={handlebuybotton.bind(null,item)}
              onClick={handleBuyButton.bind(null, { item })}>
              Buy
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Individualitem;
