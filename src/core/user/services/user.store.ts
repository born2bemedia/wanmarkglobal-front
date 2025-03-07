import { create } from 'zustand';

import type { User } from '../lib/types';

export const useUserStore = create<{
  user: User | null;
  setUser: (user: User) => void;
}>(set => ({
  user: null,
  setUser: user => set({ user }),
}));
