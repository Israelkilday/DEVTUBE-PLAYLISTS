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
        <h2 className="text-2xl">{currentLesson?.title}</h2>

        <span className="text-sm text-zinc-400">
          Playlist: "{currentModule?.title}"
        </span>
      </div>
    </div>
  );
}

export default Header;
