import { Video } from "lucide-react";

export function Lesson() {
  return (
    <button className="items flex gap-3 text-sm text-zinc-400">
      <Video className="h-4 w-4 text-zinc-500" />
      <span>Fundamentos do Redux</span>
      <span className="ml-auto font-mono text-base text-zinc-500">09:13</span>
    </button>
  );
}
