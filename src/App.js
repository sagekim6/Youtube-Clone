import { useEffect } from "react";

// COMPONENTS
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import IFrame from "./components/IFrame";
import "./App.scss";

function App() {
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const getData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${KEY}`
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
      <IFrame />
    </>
  );
}

export default App;
