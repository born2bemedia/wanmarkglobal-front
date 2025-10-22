'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/services/user.store';

import { calculateTotalPrice } from '@/features/cart/lib/utils';
import { clearCart } from '@/features/cart/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError } from '@/shared/lib/notify';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Autocomplete } from '@/shared/ui/kit/autocomplete';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Separator } from '@/shared/ui/kit/separator';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { useCartProducts } from '../../hooks/use-cart-products';
import { allowedCountries } from '../../lib/countries';
import { OrderSchema, orderSchema } from '../../lib/order.schema';
import { createOrder } from '../../services/create-order.action';
import st from './order-personal-details.module.scss';

export function OrderPersonalDetails() {
  const t = useTranslations('cart.checkout.orderDetails');

  const { products } = useCartProducts();
  const countryCode = useCountryCode();
  const router = useRouter();
  const { user } = useUserStore();

  const totalPrice = useMemo(() => calculateTotalPrice(products), [products]);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      zip: '',
      city: '',
      street: '',
      country: '',
    },
  });

  const onSubmit = handleSubmit(async (data: OrderSchema) => {
    const res = await createOrder({
      products,
      billing: data,
      totalPrice,
      user,
    });

    if (res?.message === 'Order successfully created.') {
      router.push('/thank-you');
      clearCart();
      reset();
    } else {
      console.error(res);
      notifyError(
        t('failed', {
          fallback: 'Something went wrong. Please try again later.',
        }),
      );
    }
  });

  return (
    <form className={st.layout} onSubmit={onSubmit}>
      <Title level={5} color="black" uppercase>
        {t('orderSummary', { fallback: 'Order Summary' })}
      </Title>
      <Separator className={st.separator} />
      <div className={st.fields}>
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
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error, isTouched } }) => (
              <PhoneField
                label={t('phone.label', { fallback: 'Phone' })}
                country={countryCode}
                hint={isTouched ? error?.message : undefined}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('email.placeholder', {
                  fallback: 'Enter Your Email',
                })}
                label={t('email.label', { fallback: 'Email' })}
                hint={error?.message}
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="street"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder={t('street.placeholder', {
                  fallback: 'Enter Your Street',
                })}
                label={t('street.label', { fallback: 'Street' })}
                hint={error?.message}
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
                {...field}
              />
            )}
          />
        </section>
        <section className={st.row}>
          <Controller
            name="country"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                items={allowedCountries}
                placeholder={t('country.placeholder', {
                  fallback: 'Select or Enter Your Country',
                })}
                label={t('country.label', { fallback: 'Country' })}
                hint={error?.message}
                onChange={field.onChange}
              />
            )}
          />
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
                {...field}
              />
            )}
          />
        </section>
      </div>
      <div className={st.agreement}>
        <section className={st.checks}>
          <Controller
            name="agreement"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Checkbox
                  variant="secondary"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  label={t('agreement.label', {
                    fallback:
                      'I confirm that the provided details are correct.',
                  })}
                />
                {error && (
                  <Text color="lightBlue" className={st.agreementError}>
                    {error.message}
                  </Text>
                )}
              </div>
            )}
          />
          <Controller
            name="isDetailsCorrect"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <Checkbox
                  variant="secondary"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  label={t('isDetailsCorrect.label', {
                    fallback:
                      'By placing this order, you agree to the Terms of Use and Privacy Policy.',
                  })}
                />
                {error && (
                  <Text color="lightBlue" className={st.agreementError}>
                    {error.message}
                  </Text>
                )}
              </div>
            )}
          />
        </section>
        <Button
          variant="black"
          className={st.btn}
          disabled={isSubmitting || !products.length}
        >
          {isSubmitting ? (
            <>
              {t('sending', { fallback: 'Sending...' })}
              <Loader />
            </>
          ) : (
            <>
              {t('confirmAndRequestInvoice', {
                fallback: 'Confirm and Request Invoice',
              })}
              <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
