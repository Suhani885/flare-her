import { create } from "zustand";
import type { LoaderState } from "@/types/loader";

const useGlobalLoader = create<LoaderState>((set, get) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decreaseCounter: () =>
    set((state) => ({ counter: Math.max(0, state.counter - 1) })),
  isLoading: () => get().counter > 0,
}));

export default useGlobalLoader;
