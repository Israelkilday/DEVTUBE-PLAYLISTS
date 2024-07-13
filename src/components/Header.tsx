import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  if (!currentLesson || !currentModule) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson.title}</h1>

        <span className="text-sm text-zinc-400">
          Módulo "{currentModule.title}"
        </span>
      </div>
    </div>
  );
}

export default Header;
