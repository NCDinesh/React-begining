import "bootstrap/dist/css/bootstrap.min.css";
import Container from "../components/container";
import ErrorMessage from "../components/ErrorMessage";
import Listitem from "../components/Listitem";
import Foodinput from "../components/Foodinput";
import { useState } from "react";

function App() {
  // let textStateArr = useState("Food Item Entered by user");
  // let textToshow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textToshow, setTextState] = useState("");
  let [fooditems, setfooditems] = useState([
    // "Apple",
    // "Mango",
    // "Orange",
    // "banana",
  ]);

  // let fooditems = [];

  const handleOnKeydown = (event) => {
    if (event.key === "Enter") {
      let newfooditem = event.target.value;
      event.target.value = "";
      fooditems = [...fooditems, newfooditem];
      setfooditems(fooditems);
    }
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1>Healthy Fruits</h1>

        <Foodinput handleOnKeydown={handleOnKeydown}></Foodinput>
        <ErrorMessage items={fooditems}></ErrorMessage>
        <p>{textToshow}</p>
        <Listitem items={fooditems}></Listitem>
      </Container>
      {/* 
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          dolores obcaecati sed ipsa accusamus alias ad nulla, sequi beatae
          dolorem atque eligendi ratione adipisci ipsam provident nam ut
          aspernatur ipsum.
        </p>
      </Container> */}
    </>
  );
}

export default App;
