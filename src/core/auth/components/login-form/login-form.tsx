'use client';

import { ResetPasswordForm } from '@/core/auth/components/reset-password';
import { LoginSchema, loginSchema } from '@/core/auth/lib/login.schema';
import { login } from '@/core/auth/services/login.action';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { ArrowTopRightCircle, Close } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import {
  useLoginModalStore,
  useResetPasswordStore,
} from '../../services/auth.store';
import st from './login-form.module.scss';

export function LoginForm() {
  const { show, switchTo } = useResetPasswordStore();

  const { setOpen } = useLoginModalStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data: LoginSchema) => {
    const res = await login(data);

    if (res.success) {
      setOpen(false);
      notifySuccess(res.message);
      reset();
    } else {
      notifyError('Authentication failed. Please try again.');
    }
  });

  return show ? (
    <ResetPasswordForm />
  ) : (
    <form onSubmit={onSubmit} className={st.form}>
      <div className={st.header}>
        <Title level={5} color="darkBlue" uppercase>
          Log In
        </Title>
        <button className={st.icon} onClick={() => setOpen(false)}>
          <Close />
        </button>
      </div>
      <section className={st.formInner}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              hint={error?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextField
                placeholder="Enter Your Password"
                label="Password"
                type="password"
                hint={error?.message}
                {...field}
              />
              <button
                className={st.forgotPassword}
                onClick={() => switchTo(true)}
              >
                <Text
                  color="lightBlue"
                  weight={300}
                  size="sm"
                  className={st.link}
                >
                  Forgot your password?
                </Text>
              </button>
            </>
          )}
        />
      </section>
      <section className={st.btnLayout}>
        <Button variant="black" className={st.btn} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              Requesting...
              <Loader />
            </>
          ) : (
            <>
              Login <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
        <Text color="lightBlue">
          Don&#39;t have an account yet?{' '}
          <span className={st.link}>Registration</span>
        </Text>
      </section>
    </form>
  );
}
