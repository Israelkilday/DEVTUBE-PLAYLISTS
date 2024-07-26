import { useAppSelector } from "../store";
import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  if (isCourseLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>;
  }

  return (
    <div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-emerald-400">{currentLesson?.title}</h2>

        <span className="pb-3 text-sm">
          PLAYLIST:{" "}
          <span className="text-zinc-400">"{currentModule?.title}"</span>
        </span>
      </div>
    </div>
  );
}

export default Header;
