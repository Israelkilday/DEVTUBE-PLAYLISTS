import { create } from "zustand";

interface Courses {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  courses: Courses | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
  isLoading: boolean;

  play: (moduleAndLessonIndex: [number, number]) => void;
  next: () => void;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    courses: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: true,

    play: (moduleAndLessonIndex: [number, number]) => {
      const [moduleIndex, LessonIndex] = moduleAndLessonIndex;

      set({
        currentModuleIndex: moduleIndex,
        currentLessonIndex: LessonIndex,
      });
    },

    next: () => {
      const { currentLessonIndex, currentModuleIndex, courses } = get();

      const nextLessonIndex = currentLessonIndex + 1;
      const nextLesson =
        courses?.modules[currentModuleIndex].lessons[nextLessonIndex];

      if (nextLesson) {
        set({ currentLessonIndex: nextLessonIndex });
      } else {
        const nextModuleIndex = currentModuleIndex + 1;
        const nextModule = courses?.modules[nextModuleIndex];

        if (nextModule) {
          set({
            currentModuleIndex: nextModuleIndex,
            currentLessonIndex: 0,
          });
        }
      }
    },
  };
});
