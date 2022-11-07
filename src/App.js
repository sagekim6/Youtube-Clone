import { useEffect, useState } from "react";

// COMPONENTS
import Header from "./components/Header";
import "./style/App.scss";

function App() {
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [data, setData] = useState([]);
  const [thumbnails, setThumbnails] = useState([]); // 썸네일 default 이미지

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
    console.log(data);
    setThumbnails(data.map((el) => el.snippet.thumbnails.default));
  }, []);

  return (
    <>
      <Header />
      {data.map((el, i) => (
        <div key={i}>
          <img src={el.snippet.thumbnails.default.url} alt="thumbnail" />
          <h2>{el.snippet.title}</h2>
          <p>{el.snippet.channelTitle}</p>
        </div>
      ))}
    </>
  );
}

export default App;
