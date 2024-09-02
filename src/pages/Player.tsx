import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Player() {
  const { courses, load } = useStore((store) => {
    return {
      courses: store.courses,
      load: store.load,
    };
  });

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`;
    }
  }, [currentLesson]);

  return (
    <div className="min-h-screen items-center justify-center bg-zinc-950 text-zinc-50 lg:flex">
      <div className="flex flex-col bg-zinc-950 lg:w-[1100px]">
        <div className="px-5">
          <h1 className="Text Shine boder-[1px] inline-flex w-full animate-shine border-b border-zinc-500 bg-[linear-gradient(110deg,#939393,45%,#1e2631,55%,#939393)] bg-[length:200%_100%] bg-clip-text pb-4 pt-6 font-montserrat text-4xl font-medium text-transparent lg:pt-8 lg:text-5xl">
            DevTube Playlists
          </h1>
        </div>

        <div className="items-center justify-between p-5 lg:flex lg:pb-2">
          <Header />

          <button className="mb-2 mt-2 inline-flex animate-shine items-center justify-center rounded-xl border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-base font-medium text-neutral-400 transition-colors">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7236489993605529600/"
              download
              target="blank"
              rel="noopener noreferrer"
            >
              Deixar FeedBack
            </a>
          </button>
        </div>

        <main className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:relative md:mx-5 md:flex md:h-80 lg:h-[400px] lg:pr-96">
          <div className="w-full lg:flex-1">
            <Video />
          </div>

          <aside className="bottom-0 right-0 top-0 divide-y-2 divide-zinc-900 overflow-hidden overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute md:w-72 lg:w-96">
            {courses?.modules &&
              courses?.modules.map((module, index) => {
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
        <Footer />
      </div>
    </div>
  );
}

export default Player;
