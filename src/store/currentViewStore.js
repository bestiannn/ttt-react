import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useCurrentViewStore = create((set) => ({
  currentView: "login",
  setCurrentView: (view) => set({ currentView: view }),
}), shallow);
