import "./App.css";
import Global from "../global/Global";
import { Context } from "../../context/context";
import { useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Context.Provider value={[currentIndex, setCurrentIndex]}>
      <Global />
    </Context.Provider>
  );
}

export default App;
