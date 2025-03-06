'use client';

import { useState } from 'react';

import { ResetPasswordLetter } from '@/core/auth/components/reset-password/reset-password-letter';
import { resetPassword } from '@/core/auth/services/reset-password.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/notify';
import { ArrowTopRightCircle, ChevronLeft } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import {
  ResetPasswordSchema,
  resetPasswordSchema,
} from '../../lib/reset-password.schema';
import { useResetPasswordStore } from '../../services/auth.store';
import st from './reset-password-form.module.scss';

export function ResetPasswordForm() {
  const [approvedEmail, setApprovedEmail] = useState<string>('');
  const [switchToLetter, setSwitchToLetter] = useState<boolean>(false);

  const { switchTo } = useResetPasswordStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ResetPasswordSchema) => {
    const res = await resetPassword(data.email);

    if (res.message === 'Success') {
      setApprovedEmail(data.email);
      setSwitchToLetter(true);
      reset();
    } else {
      notifyError('Something went wrong. Please try again later.');
    }
  });

  return switchToLetter ? (
    <ResetPasswordLetter email={approvedEmail} />
  ) : (
    <form className={st.form} onSubmit={onSubmit}>
      <div>
        <section className={st.heading}>
          <button className={st.icon} onClick={() => switchTo(false)}>
            <ChevronLeft />
          </button>
          <Title level={5} weight={500} uppercase>
            Password reset
          </Title>
        </section>
        <section className={st.field}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Enter Your Email"
                label="Enter your email to reset your password"
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
      </div>
      <section>
        <Button variant="black" disabled={isSubmitting} className={st.btn}>
          {isSubmitting ? (
            <>
              Requesting...
              <Loader />
            </>
          ) : (
            <>
              Next <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
      </section>
    </form>
  );
}
