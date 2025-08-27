'use client';

import { useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError } from '@/shared/lib/notify';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Dialog } from '@/shared/ui/kit/dialog/dialog';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import {
  OrderProductSchema,
  orderProductSchema,
} from '../../lib/order-product.schema';
import { orderProduct } from '../../services/order-product.action';
import st from './order-form.module.scss';

export function OrderNoServicesForm({
  type,
}: {
  type:
    | 'Business Consulting'
    | 'Marketing Consulting'
    | 'Contact'
    | 'Growth Solutions';
}) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [isReCaptchaVerified, setIsReCaptchaVerified] =
    useState<boolean>(false);

  const countryCode = useCountryCode();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<OrderProductSchema>({
    resolver: zodResolver(orderProductSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      projectDescription: '',
    },
  });

  const onSubmit = handleSubmit(async (data: OrderProductSchema) => {
    try {
      await orderProduct({ ...data, type, user: null });
      setDialogOpen(true);
      reset();
    } catch (e) {
      console.error('Error send form', e);
      notifyError('Failed to send the request. Please try again later.');
    }
  });

  const onReCaptchaChange = (token: string | null) =>
    setIsReCaptchaVerified(!!token);

  return (
    <form onSubmit={onSubmit} className={st.formLayout}>
      <section className={st.twoRecordsLine}>
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
      <section className={st.twoRecordsLine}>
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
      <Controller
        name="projectDescription"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextArea
            placeholder="Tell us a little about the project..."
            label="Project Description"
            hint={error?.message}
            {...field}
          />
        )}
      />
      <section className={st.agreementLayout} style={{ marginTop: '26px' }}>
        <Controller
          name="agreement"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Checkbox
                variant="secondary"
                checked={field.value}
                onCheckedChange={field.onChange}
                label="I agree to the Terms and Conditions and Privacy Policy of Wanmark Global."
              />
              {error && (
                <Text color="lightBlue" className={st.agreementError}>
                  {error.message}
                </Text>
              )}
            </div>
          )}
        />
        <Button
          variant="black"
          className={st.requestBtn}
          disabled={isSubmitting || !isReCaptchaVerified}
        >
          {isSubmitting ? (
            <>
              Sending...
              <Loader />
            </>
          ) : (
            <>
              Request Now
              <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
        <ReCaptcha
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          onChange={onReCaptchaChange}
        />
      </section>
      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        layoutClassName={st.dialogLayout}
        withDecor
      >
        <section className={st.dialogContent}>
          <Title level={5} color="darkBlue" weight={500} uppercase>
            Your request has been submitted!
          </Title>
          <Text color="lightBlue">
            We will review your selections and contact you shortly with a
            personalized proposal.
          </Text>
        </section>
      </Dialog>
    </form>
  );
}
