import { describe, expect, it } from "vitest";
import { player as reducer, play, next, PlayerState } from "./player";

const exempleState: PlayerState = {
  courses: {
    id: 1,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
          { id: "3Bl86gQTEPY&t=361s", title: "teste2", duration: "34:89" },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
          { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("player slice", () => {
  it("should be able to play ", () => {
    const state = reducer(exempleState, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should be able to play next video autmaticaly ", () => {
    const state = reducer(exempleState, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automaticaly ", () => {
    const state = reducer(
      {
        ...exempleState,
        currentLessonIndex: 1,
      },
      next(),
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });

  it("should be able to jump to the next module autmaticaly ", () => {
    const state = reducer(
      {
        ...exempleState,
        currentModuleIndex: 1,
        currentLessonIndex: 1,
      },
      next(),
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });
});
