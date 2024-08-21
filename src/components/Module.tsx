import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useState, useRef, useEffect } from "react";
import { useStore } from "../zustand-store";

interface ModuleProps {
  title: string;
  moduleIndex: number;
  amountOfLesson: number;
}

export function Module({ title, amountOfLesson, moduleIndex }: ModuleProps) {
  const { currentLessonIndex, currentModuleIndex, lessons, play } = useStore(
    (store) => {
      return {
        lessons: store.courses?.modules[moduleIndex].lessons,
        currentLessonIndex: store.currentLessonIndex,
        currentModuleIndex: store.currentModuleIndex,
        play: store.play,
      };
    },
  );

  const [isOpen, setIsOpen] = useState(moduleIndex === 0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, lessons]);

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={moduleIndex === 0}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Collapsible.Trigger className="flex w-full items-center gap-3 rounded-lg bg-zinc-800 p-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs lg:h-9 lg:w-9">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-base">{title}</strong>
          <span className="text-base text-zinc-400">
            {amountOfLesson} aulas
          </span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-200"
        ref={contentRef}
      >
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
