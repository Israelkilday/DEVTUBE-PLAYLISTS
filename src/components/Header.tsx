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
        <h2 className="text-xl text-emerald-400 lg:text-2xl">
          {currentLesson?.title}
        </h2>

        <span className="pb-3 text-base">
          PLAYLIST:{" "}
          <span className="text-zinc-400">"{currentModule?.title}"</span>
        </span>
      </div>
    </div>
  );
}

export default Header;
