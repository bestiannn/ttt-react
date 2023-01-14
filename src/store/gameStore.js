import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useGameStore = create(
  (set) => ({
    id: null,
    vs: null,
    turn: "X",
    playersInfo: {
      player1: {
        id: null,
        name: "",
        symbol: "",
      },
      player2: {
        id: null,
        name: "",
        symbol: "",
      },
    },
    stats: {
      wins: 0,
      losses: 0,
      ties: 0,
    },

    // Setters for the store
    setId: (id) => set({ id }),
    setVs: (vs) => set({ vs }),
    setTurn: (turn) => set({ turn }),
    toogleTurn: () => set((state) => ({ turn: state.turn === "X" ? "O" : "X" })),
    setPlayersInfo: (playersInfo) => set({ playersInfo }),
    setStats: (stats) => set({ stats }),

    // Setter for each player
    setPlayer1: (player1) =>
      set((state) => ({ playersInfo: { ...state.playersInfo, player1 } })),
    setPlayer2: (player2) =>
      set((state) => ({ playersInfo: { ...state.playersInfo, player2 } })),

    // Setters for each stat
    addWin: () =>
      set((state) => ({
        stats: { ...state.stats, wins: state.stats.wins + 1 },
      })),
    addLoss: () =>
      set((state) => ({
        stats: { ...state.stats, losses: state.stats.losses + 1 },
      })),
    addTie: () =>
      set((state) => ({
        stats: { ...state.stats, ties: state.stats.ties + 1 },
      })),
  }),
  shallow
);
