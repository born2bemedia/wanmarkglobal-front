'use client';

import { useTranslations } from 'next-intl';

import {
  ChangePasswordSchema,
  changePasswordSchema,
} from '@/core/user/lib/change-password.schema';
import { changePassword, useUserStore } from '@/core/user/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import st from './personal-info.module.scss';

export function ChangePasswordForm() {
  const t = useTranslations('changePasswordForm');
  const { user } = useUserStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ChangePasswordSchema) => {
    const res = await changePassword({ ...data, userID: user?.id ?? -1 });

    if (res.message) {
      notifySuccess(res.message);
      reset();
    } else {
      console.error(res);
      notifyError(
        t('error', {
          fallback: 'Password change failed. Please try again later.',
        }),
      );
    }
  });

  return (
    <form className={st.form} onSubmit={onSubmit}>
      <section className={st.title}>
        <Title level={5} weight={500} color="darkBlue" uppercase>
          {t('title', { fallback: 'Password Change' })}
        </Title>
        <Button variant="transparent" className={st.btn}>
          {isSubmitting ? (
            <>
              {t('saving', { fallback: 'CHANGING...' })}
              <Loader width={14} height={14} />
            </>
          ) : (
            <>{t('save', { fallback: 'CHANGE' })}</>
          )}
        </Button>
      </section>
      <section className={st.row}>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('password.placeholder', {
                fallback: 'Enter New Password',
              })}
              label={t('password.label', { fallback: 'New Password' })}
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder={t('confirmPassword.placeholder', {
                fallback: 'Confirm New Password',
              })}
              label={t('confirmPassword.label', {
                fallback: 'Confirm New Password',
              })}
              hint={error?.message}
              {...field}
            />
          )}
        />
      </section>
    </form>
  );
}
