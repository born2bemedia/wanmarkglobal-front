import { create } from 'zustand';

export const useLoginModalStore = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>(set => ({
  open: true,
  setOpen: open => set({ open }),
}));
