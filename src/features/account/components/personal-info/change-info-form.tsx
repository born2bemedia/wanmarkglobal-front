'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { UserSchema, userSchema } from '@/core/user/lib';
import { saveUser, useUserStore } from '@/core/user/services';

import { allowedCountries } from '@/features/cart/lib/countries';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import st from './personal-info.module.scss';

export function ChangeInfoForm() {
  const [edit, setEdit] = useState<boolean>(false);

  const { user, setUser } = useUserStore();
  const countryCode = useCountryCode();
  const t = useTranslations('changeInfoForm');

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: user?.email ?? '',
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      phone: user?.phone ?? '',
      address: user?.address ?? '',
      city: user?.city ?? '',
      zip: user?.zip ?? '',
      country: user?.country ?? '',
    },
  });

  const onSubmit = handleSubmit(async (data: UserSchema) => {
    if (edit) {
      const res = await saveUser({ ...data, userID: user?.id ?? -1 });

      if (res.message) {
        reset(data);
        setUser(res.doc);
        notifySuccess(res.message);
        setEdit(false);
      } else {
        console.error(res);
        notifyError(
          t('failed', {
            fallback: 'Failed to save user data. Please try again later.',
          }),
        );
      }
    }
  });

  return (
    <form className={st.form} onSubmit={onSubmit}>
      <section className={st.title}>
        <Title level={5} weight={500} color="darkBlue" uppercase>
          {t('title', { fallback: 'Personal Information' })}
        </Title>
        {edit ? (
          <Button variant="transparent" type="submit" className={st.btn}>
            {isSubmitting ? (
              <>
                {t('saving', { fallback: 'SAVING...' })}
                <Loader width={14} height={14} />
              </>
            ) : (
              <>{t('save', { fallback: 'SAVE' })}</>
            )}
          </Button>
        ) : (
          <Button
            variant="transparent"
            type="button"
            className={st.btn}
            onClick={e => {
              e.preventDefault();
              setEdit(true);
            }}
          >
            {t('edit', { fallback: 'EDIT' })}
          </Button>
        )}
      </section>
      <section className={st.formInner}>
        <section className={st.row}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('firstName.placeholder', {
                  fallback: 'Enter First Name',
                })}
                label={t('firstName.label', { fallback: 'First Name' })}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('lastName.placeholder', {
                  fallback: 'Enter Last Name',
                })}
                label={t('lastName.label', { fallback: 'Last Name' })}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('email.placeholder', {
                  fallback: 'Enter Your Email',
                })}
                label={t('email.label', { fallback: 'Email' })}
                disabled={!edit}
                hint={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => (
              <PhoneField
                label={t('phone.label', { fallback: 'Phone' })}
                country={countryCode}
                hint={isTouched ? error?.message : undefined}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('address.placeholder', {
                  fallback: 'Enter Your Address',
                })}
                label={t('address.label', { fallback: 'Address' })}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('city.placeholder', {
                  fallback: 'Enter Your City',
                })}
                label={t('city.label', { fallback: 'City' })}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('zip.placeholder', {
                  fallback: 'Enter Your ZIP',
                })}
                label={t('zip.label', { fallback: 'ZIP' })}
                hint={error?.message}
                disabled={!edit}
                {...field}
              />
            )}
          />
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                initialValue={user?.country}
                items={allowedCountries}
                placeholder={t('country.placeholder', {
                  fallback: 'Select or Enter Your Country',
                })}
                label={t('country.label', { fallback: 'Country' })}
                hint={error?.message}
                onChange={field.onChange}
                disabled={!edit}
              />
            )}
          />
        </section>
      </section>
    </form>
  );
}
