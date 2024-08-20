import { create } from "zustand";
import { api } from "../lib/axiox";

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
  load: () => Promise<void>;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    courses: null,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
    isLoading: true,

    load: async () => {
      set({ isLoading: true });
      const response = await api.get("/courses/1");

      set({
        courses: response.data,
        isLoading: false,
      });
    },

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

export const useCurrentLesson = () => {
  return useStore((state) => {
    const { currentModuleIndex, currentLessonIndex } = state;

    const currentModule = state.courses?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
