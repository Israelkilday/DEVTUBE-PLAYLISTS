import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export function Video() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lesson = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];
    return currentLesson;
  });

  return (
    <div className="aspect-video h-auto w-full bg-zinc-950 object-contain">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  );
}

export default Video;
