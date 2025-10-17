'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useUserStore } from '@/core/user/services/user.store';

import { ProductService } from '@/features/product/components';

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
  OrderProductWithServiceSchema,
  orderProductWithServiceSchema,
} from '../../lib/order-product.schema';
import type { Service } from '../../lib/types';
import { orderProduct } from '../../services/order-product.action';
import st from './order-form.module.scss';

const splitIntoColumns = (items: Service[], columns: number = 2) => {
  const mid = Math.ceil(items.length / columns);
  return [items.slice(0, mid), items.slice(mid)];
};

export function OrderForm({
  services,
  type,
}: {
  type: 'Business Consulting' | 'Marketing Consulting';
  services: Service[];
}) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const t = useTranslations('orderForm');

  const { user } = useUserStore();
  const countryCode = useCountryCode();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<OrderProductWithServiceSchema>({
    resolver: zodResolver(orderProductWithServiceSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      projectDescription: '',
      selectedServices: [],
    },
  });

  const onSubmit = handleSubmit(async (data: OrderProductWithServiceSchema) => {
    try {
      await orderProduct({ ...data, type, user });
      setDialogOpen(true);
      reset();
    } catch (e) {
      console.error('Error send form', e);
      notifyError(
        t('failed', {
          fallback: 'Failed to send the request. Please try again later.',
        }),
      );
    }
  });

  const [leftColumn, rightColumn] = splitIntoColumns(services);

  return (
    <form onSubmit={onSubmit} className={st.formLayout}>
      <section className={st.twoRecordsLine}>
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
      <section className={st.twoRecordsLine}>
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
      <Controller
        name="projectDescription"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextArea
            placeholder={t('projectDescription.placeholder', {
              fallback: 'Tell us a little about the project...',
            })}
            label={t('projectDescription.label', {
              fallback: 'Project Description',
            })}
            hint={error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="selectedServices"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <section className={st.servicesLayout}>
            <div className={st.servicesTitle}>
              <Text color="darkBlue">
                {t('selectedServices.label', {
                  fallback: 'Select Services',
                })}
              </Text>
              {error && <Text color="lightBlue">*{error.message}</Text>}
            </div>
            <section className={st.services}>
              <div className={st.column}>
                {leftColumn.map(service => (
                  <ProductService
                    key={service.title}
                    name={service.title}
                    icon={service.icon}
                    checked={field.value.some(
                      item => item.title === service.title,
                    )}
                    onCheckedChange={checked => {
                      const updatedServices = checked
                        ? [...field.value, service]
                        : field.value.filter(s => s.title !== service.title);
                      field.onChange(updatedServices);
                    }}
                  />
                ))}
              </div>
              <div className={st.column}>
                {rightColumn.map(service => (
                  <ProductService
                    key={service.title}
                    name={service.title}
                    icon={service.icon}
                    checked={field.value.some(
                      item => item.title === service.title,
                    )}
                    onCheckedChange={checked => {
                      const updatedServices = checked
                        ? [...field.value, service]
                        : field.value.filter(s => s.title !== service.title);
                      field.onChange(updatedServices);
                    }}
                  />
                ))}
              </div>
            </section>
          </section>
        )}
      />
      <section className={st.agreementLayout}>
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
                    'I agree to the Terms and Conditions and Privacy Policy of Wanmark Global.',
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
        <Button
          variant="black"
          type="submit"
          className={st.requestBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              {t('sending', { fallback: 'Sending...' })}
              <Loader />
            </>
          ) : (
            <>
              {t('requestNow', { fallback: 'Request Now' })}
              <ArrowTopRightCircle color="black" />
            </>
          )}
        </Button>
      </section>
      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        layoutClassName={st.dialogLayout}
        withDecor
      >
        <section className={st.dialogContent}>
          <Title level={5} color="darkBlue" weight={500} uppercase>
            {t('success.title', {
              fallback: 'Your request has been submitted!',
            })}
          </Title>
          <Text color="lightBlue">
            {t('success.text', {
              fallback:
                'We will review your selections and contact you shortly with a personalized proposal.',
            })}
          </Text>
        </section>
      </Dialog>
    </form>
  );
}
