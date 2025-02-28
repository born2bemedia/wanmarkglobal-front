'use client';

import { ReactNode } from 'react';

import {
  OrderProductSchema,
  orderProductSchema,
} from '@/features/order-product-form/lib/order-product.schema';
import { ProductService } from '@/features/product/components/product-service';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import st from './order-form.module.scss';

const splitIntoColumns = (
  items: { name: string; icon?: ReactNode }[],
  columns: number = 2,
) => {
  const mid = Math.ceil(items.length / columns); // Количество элементов в первой колонке
  return [items.slice(0, mid), items.slice(mid)];
};

export function OrderForm({
  services,
  type,
}: {
  type: 'Business Consulting' | 'Marketing Consulting';
  services: { name: string; icon?: ReactNode }[];
}) {
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
      selectedServices: [],
    },
  });

  const onSubmit = handleSubmit(async (data: OrderProductSchema) => {
    console.log({ ...data, type });
    reset();
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
      <Controller
        name="selectedServices"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <section className={st.servicesLayout}>
            <div className={st.servicesTitle}>
              <Text color="darkBlue">Select Services</Text>
              {error && <Text color="lightBlue">*{error.message}</Text>}
            </div>
            <section className={st.services}>
              <div className={st.column}>
                {leftColumn.map(service => (
                  <ProductService
                    key={service.name}
                    name={service.name}
                    icon={service.icon}
                    checked={field.value.includes(service.name)}
                    onCheckedChange={checked => {
                      const updatedServices = checked
                        ? [...field.value, service.name]
                        : field.value.filter((s: string) => s !== service.name);
                      field.onChange(updatedServices);
                    }}
                  />
                ))}
              </div>
              <div className={st.column}>
                {rightColumn.map(service => (
                  <ProductService
                    key={service.name}
                    name={service.name}
                    icon={service.icon}
                    checked={field.value.includes(service.name)}
                    onCheckedChange={checked => {
                      const updatedServices = checked
                        ? [...field.value, service.name]
                        : field.value.filter((s: string) => s !== service.name);
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
          disabled={isSubmitting}
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
      </section>
    </form>
  );
}
