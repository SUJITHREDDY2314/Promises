import Child from "./Child";
import React, { useState } from "react";
function App() {
  const [dataToPass, setData] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, [isClicked]);
  // to avoid setting every time and infinite loop
  const [changed, setChanged] = useState(false);
  const funcToReset = () => {
    if (changed) {
      setIsClicked((prev) => !prev);
    } else {
      console.log("iam invoked");
      setData({});
    }
    setChanged((prev) => !prev);
  };

  return (
    <div className="App">
      <p>My react app</p>
      <Child
        key={dataToPass.id}
        test="hi"
        obj={dataToPass}
        fun={funcToReset}
        click={changed}
      />
    </div>
  );
}

export default App;
