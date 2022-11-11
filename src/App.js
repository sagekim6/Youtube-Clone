import { useEffect, useState } from "react";

// COMPONENTS
import Header from "./components/Header";
import "./style/App.scss";

function App() {
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);
  const [channels, setChannels] = useState([]);

  const getVideos = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=player&chart=mostPopular&maxResults=25&key=${KEY}`
    );
    const json = await res.json();
    setVideos(json.items);
  };

  const getChannels = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${videos.map(
        (el) => el.snippet.channelId
      )}&key=${KEY}`
    );
    const json = await res.json();
    setChannels(json.items);
  };

  useEffect(() => {
    getVideos();
    getChannels();
    console.log(videos);
    console.log(channels);
  }, []);

  return (
    <>
      <Header />
      <main>
        {videos.map((el) => (
          <div key={el.id}>
            <img
              src={el.snippet.thumbnails.default.url}
              alt={el.snippet.title}
            />
            <h2>{el.snippet.title}</h2>
            <p>{el.snippet.channelTitle}</p>
            <span>{el.statistics.viewCount}</span>
            {channels.map((channel, i) => {
              if (el.snippet.channelId === channel.id) {
                return (
                  <img
                    key={i}
                    src={channel.snippet.thumbnails.default.url}
                    alt="channel logo"
                  />
                );
              }
            })}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
