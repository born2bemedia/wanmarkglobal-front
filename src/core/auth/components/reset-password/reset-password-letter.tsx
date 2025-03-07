'use client';

import { FormEvent } from 'react';

import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Close, FiveDots } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import {
  useLoginModalStore,
  useResetPasswordStore,
} from '../../services/auth.store';
import { resetPassword } from '../../services/reset-password.action';
import st from './reset-password-form.module.scss';

export function ResetPasswordLetter({ email }: { email: string }) {
  const { setOpen } = useLoginModalStore();
  const { switchTo } = useResetPasswordStore();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await resetPassword(email);

    if (res.message === 'Success') {
      notifySuccess('Password reset link sent');
    } else {
      notifyError(
        `Something went wrong. ${res.errors.map((e: { message: string }) => e.message).join(' ')}`,
      );
    }
  };

  return (
    <form onSubmit={onSubmit} className={st.letterForm}>
      <section>
        <div className={st.letterHeading}>
          <Title level={5} weight={500} color="darkBlue" uppercase>
            Password Reset
          </Title>
          <button
            className={st.icon}
            onClick={() => {
              setOpen(false);
              switchTo(false);
            }}
          >
            <Close />
          </button>
        </div>
        <Text color="mediumBlue" className={st.letterMsg}>
          We have sent a password reset link to the mail: example@email.com
          <br />
          Please check your mail
        </Text>
      </section>
      <div className={st.letterIcon}>
        <FiveDots width="100" height="100" />
      </div>
      <div className={st.letterSendAgain}>
        <Text color="lightBlue">Didn&#39;t receive a letter?</Text>
        <button type="submit">
          <Text color="mediumBlue" className={st.link}>
            Send again
          </Text>
        </button>
      </div>
    </form>
  );
}
