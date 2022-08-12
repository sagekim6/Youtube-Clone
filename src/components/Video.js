const Video = ({ id = [], title = [] }) => {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="500"
        height="400"
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Video;
