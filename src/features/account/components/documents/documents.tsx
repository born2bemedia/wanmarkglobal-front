'use client';

import { TabHeading } from '../tab-heading';
import { TabLayout } from '../tab-layout';

export function Documents() {
  return (
    <TabLayout>
      <TabHeading
        title="Your Documents"
        desc="Track your order fulfillment progress and download reports,
          strategies, guides, and other provided documents."
      />
    </TabLayout>
  );
}
