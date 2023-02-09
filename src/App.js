import Child from "./Child";
import React from "react";
function App() {
  const [dataToPass, setData] = React.useState({});


  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((res) => setData(res));
  }); 
  // to avoid setting every time and infinite loop

  const funcToReset = () => {
    console.log("iam invoked");
    setData({});
  };

  return (
    <div className="App">
      <p>My react app</p>
      <Child key={dataToPass.id} test="hi" obj={dataToPass} fun={funcToReset} />
    </div>
  );
}

export default App;
