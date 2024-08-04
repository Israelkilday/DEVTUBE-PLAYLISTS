import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="aspect-video h-80 w-full bg-zinc-950 object-contain md:h-full">
      {isCourseLoading ? (
        <div className="flex min-h-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}

export default Video;
