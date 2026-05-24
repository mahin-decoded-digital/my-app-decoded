import { create } from 'zustand';

type GlowIntensity = 'low' | 'medium' | 'high';

interface GreetingState {
  message: string;
  glowIntensity: GlowIntensity;
  setMessage: (message: string) => void;
  cycleGlow: () => void;
}

const glowCycle: GlowIntensity[] = ['low', 'medium', 'high'];

export const useGreetingStore = create<GreetingState>((set) => ({
  message: 'Hello, World!',
  glowIntensity: 'medium',
  setMessage: (message: string) => set({ message }),
  cycleGlow: () =>
    set((state) => {
      const currentIndex = glowCycle.indexOf(state.glowIntensity);
      const nextIndex = (currentIndex + 1) % glowCycle.length;
      return { glowIntensity: glowCycle[nextIndex] };
    }),
}));
