import { useEffect } from "react";

// COMPONENTS
import SideBar from "./components/SideBar";
import Header from "./components/Header";
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

  return (
    <>
      <Header />
      <SideBar />
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/_spuxXnul0U"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default App;
