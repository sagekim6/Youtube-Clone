const Video = ({ id = [] }) => {
  // <iframe> elements must have a unique title property -> title 추가

  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="500"
        height="400"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Video;
