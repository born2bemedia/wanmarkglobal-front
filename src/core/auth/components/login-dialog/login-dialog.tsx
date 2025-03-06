'use client';

import { Dialog } from '@/shared/ui/kit/dialog';

import { useLoginModalStore } from '../../services/auth.store';
import { LoginForm } from '../login-form';
import st from './login-dialog.module.scss';

export function LoginDialog() {
  const { open, setOpen } = useLoginModalStore();

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      contentClassName={st.layout}
      layoutClassName={st.content}
      hideCloseBtn
    >
      <LoginForm />
    </Dialog>
  );
}
