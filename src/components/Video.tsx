import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=pVichgT6pyo"
      />
    </div>
  );
};

export default Video;
