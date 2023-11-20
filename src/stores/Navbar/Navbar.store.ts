import { create } from "zustand";
import { Action, State } from "./Navbar.store.types";
import { persist } from "zustand/middleware";

export const useNavbarStore = create<State & Action>()(
  persist(
    (set, get) => ({
      isOpen: true,
      handleOpen: () => set({ isOpen: !get().isOpen }),
    }),
    {
      name: "@menu",
    }
  )
);
