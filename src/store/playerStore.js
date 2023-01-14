import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const usePlayerStore = create((set) => ({
  id: null,
  username: null,
  char: null,
  setId: (id) => set({ id }),
  setUsername: (username) => set({ username }),
  setChar: (char) => set({ char }),
}), shallow);
