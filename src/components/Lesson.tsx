import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className="items flex gap-3 text-sm text-zinc-400">
      <Video className="h-4 w-4 text-zinc-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-base text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
