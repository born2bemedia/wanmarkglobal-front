'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { logout } from '@/core/auth/services/logout.action';
import { useUserStore } from '@/core/user/services/user.store';

import { type Order } from '@/features/account/lib/types';

import { useWindow } from '@/shared/lib/hooks';
import { TabContent, Tabs } from '@/shared/ui/kit/tabs';

import { AccountLayout } from '../account-layout';
import { Documents } from '../documents';
import { Orders } from '../orders';
import { PersonalInfo } from '../personal-info';

export function AccountSettings({ orders }: { orders: Order[] }) {
  const { setUser } = useUserStore();
  const { width } = useWindow();

  const logoutHandler = async () => {
    setUser(null);
    await logout();
  };

  const tabs =
    width <= 768
      ? [
          { id: 'yourOrders', label: 'Your Orders' },
          { id: 'yourDocuments', label: 'Your Documents' },
          { id: 'yourData', label: 'Your Data' },
        ]
      : [
          { id: 'yourOrders', label: 'Your Orders' },
          { id: 'yourDocuments', label: 'Your Documents' },
          { id: 'yourData', label: 'Your Data' },
          { id: 'logOut', label: 'Log Out', onClick: logoutHandler },
        ];

  return (
    <AccountLayout>
      <Tabs values={tabs}>
        <TabContent id="yourOrders">
          <Orders values={orders} />
        </TabContent>
        <TabContent id="yourDocuments">
          <Documents />
        </TabContent>
        <TabContent id="yourData">
          <PersonalInfo />
        </TabContent>
      </Tabs>
    </AccountLayout>
  );
}
