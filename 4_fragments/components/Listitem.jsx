import Individualitem from "./Individualitem";
let Listitem = ({ items }) => {
  return (
    <Individualitem
      indiitems={items}
      handleBuyButton={({ item }) =>
        console.log(`${item}buy`)
      }></Individualitem>
  );
};

export default Listitem;
