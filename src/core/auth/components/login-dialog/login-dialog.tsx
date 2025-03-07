'use client';

import { cn } from '@/shared/lib/styles';
import { Dialog } from '@/shared/ui/kit/dialog';

import { useAuthStore, useLoginModalStore } from '../../services/auth.store';
import { AuthForm } from '../auth-form';
import st from './login-dialog.module.scss';

export function LoginDialog() {
  const { open, setOpen } = useLoginModalStore();
  const { register } = useAuthStore();

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      contentClassName={cn(st.layout, { [st.registerHeight]: register })}
      layoutClassName={st.content}
      hideCloseBtn
    >
      <AuthForm />
    </Dialog>
  );
}
