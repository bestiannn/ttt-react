import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const usePlayerStore = create(
  (set, get) => ({
    id: null,
    username: null,
    char: null,
    getEnemyChar: () => (get().char === "X" ? "O" : "X"),
    setId: (id) => set({ id }),
    setUsername: (username) => set({ username }),
    setChar: (char) => set({ char }),
  }),
  shallow
);
