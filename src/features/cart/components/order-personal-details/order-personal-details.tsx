'use client';

import { getCartProducts } from '@/features/cart/services';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
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

import { allowedCountries } from '../../lib/countries';
import { OrderSchema, orderSchema } from '../../lib/order.schema';
import st from './order-personal-details.module.scss';

export function OrderPersonalDetails() {
  const countryCode = useCountryCode();
  const products = getCartProducts();

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
    console.log(data);
    reset();
  });

  return (
    <form className={st.layout} onSubmit={onSubmit}>
      <Title level={5} color="black" uppercase>
        Order Summary
      </Title>
      <Separator className={st.separator} />
      <div className={st.fields}>
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
            render={({ field, fieldState: { error, isTouched } }) => (
              <PhoneField
                label="Phone"
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
            name="street"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                placeholder="Enter Your Street"
                label="Street"
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
                placeholder="Enter Your City"
                label="City"
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
                placeholder="Select or Enter Your Country"
                label="Country"
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
                placeholder="Enter Your ZIP"
                label="ZIP"
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
                  label="I confirm that the provided details are correct."
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
                  label="By placing this order, you agree to the Terms of Use and Privacy Policy."
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
              Sending...
              <Loader />
            </>
          ) : (
            <>
              Confirm and Request Invoice
              <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
