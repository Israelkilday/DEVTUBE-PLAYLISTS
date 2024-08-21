import { beforeEach, describe, expect, it } from "vitest";
import { useStore as store } from ".";

const courses = {
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
};

const initialState = store.getState();

describe("zustand store", () => {
  beforeEach(() => {
    store.setState(initialState);
  });

  it("should be able to play ", () => {
    const { play } = store.getState();

    play([1, 2]);

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(2);
  });

  it("should be able to play next video autmaticaly ", () => {
    store.setState({ courses });

    const { next } = store.getState();

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(0);
    expect(currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automaticaly ", () => {
    store.setState({ courses });

    const { next } = store.getState();

    store.setState({ currentLessonIndex: 1 });

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(0);
  });

  it("should be able to jump to the next module autmaticaly ", () => {
    store.setState({ courses });

    const { next } = store.getState();

    store.setState({ currentLessonIndex: 1, currentModuleIndex: 1 });

    next();

    const { currentModuleIndex, currentLessonIndex } = store.getState();

    expect(currentModuleIndex).toEqual(1);
    expect(currentLessonIndex).toEqual(1);
  });
});
