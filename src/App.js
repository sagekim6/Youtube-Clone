import { useEffect } from "react";
import "./App.css";

function App() {
  const getData = async () => {
    const res = await fetch();
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">Start Youtube clone!</div>;
}

export default App;
