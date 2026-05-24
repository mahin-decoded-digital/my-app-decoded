import { create } from 'zustand';

interface PageState {
  message: string;
  loaded: boolean;
  setMessage: (message: string) => void;
}

export const usePageStore = create<PageState>()((set) => ({
  message: "Hello, World!",
  loaded: true,
  setMessage: (message: string) => set({ message }),
}));
