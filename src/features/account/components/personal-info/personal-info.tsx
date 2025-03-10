'use client';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';

export function PersonalInfo() {
  return (
    <TabLayout>
      <TabHeading
        title="Your Data"
        desc="Manage your personal and billing information to keep your account up to date."
      />
    </TabLayout>
  );
}
