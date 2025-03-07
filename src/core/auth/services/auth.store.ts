import { create } from 'zustand';

export const useLoginModalStore = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>(set => ({
  open: false,
  setOpen: open => set({ open }),
}));

export const useResetPasswordStore = create<{
  show: boolean;
  switchTo: (open: boolean) => void;
}>(set => ({
  show: false,
  switchTo: show => set({ show }),
}));

export const useAuthStore = create<{
  register: boolean;
  openRegister: (register: boolean) => void;
}>(set => ({
  register: false,
  openRegister: register => set({ register }),
}));
