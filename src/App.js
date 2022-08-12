import { useEffect, useState } from "react";

// COMPONENTS
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Video from "./components/Video";
import "./App.scss";

function App() {
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${KEY}`
    );
    const json = await res.json();
    setData(json.items);
    return json;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      {data.map((it, i) => {
        return <Video key={i} id={it.id} title={it.title} />;
      })}
    </>
  );
}

export default App;
