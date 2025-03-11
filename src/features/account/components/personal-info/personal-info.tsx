'use client';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';
import { ChangeInfoForm } from './change-info-form';
import { ChangePasswordForm } from './change-password-form';

export function PersonalInfo() {
  return (
    <TabLayout>
      <TabHeading
        title="Your Data"
        desc="Manage your personal and billing information to keep your account up to date."
      />
      <ChangeInfoForm />
      <ChangePasswordForm />
    </TabLayout>
  );
}
