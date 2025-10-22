'use client';

import { useTranslations } from 'next-intl';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';
import { ChangeInfoForm } from './change-info-form';
import { ChangePasswordForm } from './change-password-form';

export function PersonalInfo() {
  const t = useTranslations('account.personalInfo');

  return (
    <TabLayout>
      <TabHeading
        title={t('title', { fallback: 'Your Data' })}
        desc={t('desc', {
          fallback:
            'Manage your personal and billing information to keep your account up to date.',
        })}
      />
      <ChangeInfoForm />
      <ChangePasswordForm />
    </TabLayout>
  );
}
