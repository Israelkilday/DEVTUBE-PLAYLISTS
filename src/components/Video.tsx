import ReactPlayer from "react-player";
// import { next, useCurrentLesson } from "../store/slices/player";
// import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  // const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      next: store.next,
    };
  });

  function handlePlayNext() {
    next();
  }

  return (
    <div className="aspect-video h-80 w-full bg-zinc-950 object-contain md:h-full">
      {isLoading ? (
        <div className="flex min-h-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}

export default Video;
