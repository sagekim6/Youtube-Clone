import { useEffect } from "react";
import "./App.css";

function App() {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;

  const getData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`
    );
    const json = await res.json();
    return json;
  };

  useEffect(() => {
    console.log(getData());
  }, []);

  return <div className="App">Start Youtube clone!</div>;
}

export default App;
