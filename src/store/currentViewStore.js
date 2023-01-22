import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useCurrentViewStore = create((set) => ({
  currentView: "home",
  setCurrentView: (view) => set({ currentView: view }),
}), shallow);
