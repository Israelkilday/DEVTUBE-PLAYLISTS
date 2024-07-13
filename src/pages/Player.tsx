import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";
import { start, useCurrentLesson } from "../store/slices/player";
import { useEffect } from "react";
import { api } from "../lib/axiox";
import { useDispatch } from "react-redux";

export function Player() {
  const dispatch = useDispatch();

  const modules = useAppSelector((state) => {
    return state.player.courses?.modules;
  });

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    api.get("/courses/1").then((response) => {
      dispatch(start(response.data));
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`;
    }
  }, [currentLesson]);

  return (
    <div className="h-screen items-center justify-center overflow-x-hidden bg-zinc-950 text-zinc-50 lg:flex">
      <div className="flex flex-col gap-6 lg:w-[1100px]">
        <div className="items-center justify-between p-5 lg:flex">
          <Header />

          <button className="mt-5 flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white duration-200 hover:bg-violet-600">
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>

        <main className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:flex md:pr-[279px] lg:relative lg:pr-80">
          <div className="w-full lg:flex-1">
            <Video />
          </div>

          <aside className="bottom-0 right-0 top-0 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute lg:w-80">
            {modules &&
              modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLesson={module.lessons.length}
                  />
                );
              })}
          </aside>
        </main>
      </div>
    </div>
  );
}

export default Player;
