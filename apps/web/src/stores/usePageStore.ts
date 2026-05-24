import { create } from 'zustand';

interface PageState {
  heading: string;
  subheading: string;
  setHeading: (heading: string) => void;
}

export const usePageStore = create<PageState>()((set) => ({
  heading: '',
  subheading: '',
  setHeading: (heading: string) => set({ heading }),
}));
