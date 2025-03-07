'use client';

import { useUserStore } from '@/core/user/services/user.store';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { ArrowTopRightCircle, Close } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { RegisterSchema, registerSchema } from '../../lib/register.schema';
import { useAuthStore, useLoginModalStore } from '../../services/auth.store';
import { register } from '../../services/register.action';
import st from './register-form.module.scss';

export function RegisterForm() {
  const { setOpen } = useLoginModalStore();
  const { setUser } = useUserStore();
  const { openRegister } = useAuthStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      retypePassword: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
  });

  const onSubmit = handleSubmit(async (data: RegisterSchema) => {
    const res = await register(data);

    if (res.success) {
      reset();
      setUser(res.user);
      setOpen(false);
      notifySuccess(res.message);
    } else {
      notifyError(
        `Something went wrong. ${res.errors.map((e: { message: string }) => e.message).join(' ')}`,
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.form}>
      <div className={st.header}>
        <Title level={5} color="darkBlue" weight={500} uppercase>
          Register An Account
        </Title>
        <button className={st.icon} onClick={() => setOpen(false)}>
          <Close />
        </button>
      </div>
      <section className={st.formInner}>
        <section className={st.row}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Enter First Name"
                label="First Name"
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Enter Last Name"
                label="Last Name"
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <PhoneField
                placeholder="+1 (555) 000-0000"
                label="Phone"
                hint={error?.message}
                {...field}
              />
            )}
          />
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
        </section>
        <section className={st.row}>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Come up with a password"
                label="Password"
                type="password"
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="retypePassword"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Retype Your Password"
                label="Retype Password"
                type="password"
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
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
              Registration <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
        <Text color="lightBlue">
          Already have an account?{' '}
          <button
            type="button"
            className={st.link}
            onClick={() => openRegister(false)}
          >
            Login
          </button>
        </Text>
      </section>
    </form>
  );
}
