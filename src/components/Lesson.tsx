import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  const handleclick = () => {
    window.scrollTo(0, 0);
    onPlay();
  };

  return (
    <button
      onClick={handleclick}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-base text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="h-4 w-4 text-emerald-400 lg:h-5 lg:w-5" />
      ) : (
        <Video className="h-4 w-4 text-zinc-500 lg:h-5 lg:w-5" />
      )}

      <span>{title}</span>

      <span className="ml-auto font-mono text-base text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
