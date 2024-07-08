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
            { id: "pVichgT6pyo", title: "teste", duration: "13:45" },
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
  },
  reducers: {},
});

export const player = playerSlice.reducer;
