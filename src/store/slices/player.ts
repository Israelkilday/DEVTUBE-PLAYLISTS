import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Iniciando com React",
          lessons: [
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "3Bl86gQTEPY&t=361s", title: "teste2", duration: "34:89" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
          ],
        },
        {
          id: "2",
          title: "Estrutura da aplicação",
          lessons: [
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
  },
});

export const player = playerSlice.reducer;
export const { play } = playerSlice.actions;
