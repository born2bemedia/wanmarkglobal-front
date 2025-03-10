'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { logout } from '@/core/auth/services/logout.action';
import { useUserStore } from '@/core/user/services/user.store';

import { type Order } from '@/features/account/lib/types';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';

import { AccountLayout } from '../account-layout';
import { Documents } from '../documents';
import { Orders } from '../orders';
import { PersonalInfo } from '../personal-info';

const defaultTabs = [
  { id: 'yourOrders', label: 'Your Orders' },
  { id: 'yourDocuments', label: 'Your Documents' },
  { id: 'yourData', label: 'Your Data' },
];

export function AccountSettings({ orders }: { orders: Order[] }) {
  const { setUser } = useUserStore();
  const [width, setWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoutHandler = useCallback(async () => {
    setUser(null);
    await logout();
  }, [setUser]);

  const tabs = useMemo(
    () =>
      width <= 768
        ? defaultTabs
        : [
            ...defaultTabs,
            { id: 'logOut', label: 'Log Out', onClick: logoutHandler },
          ],
    [width, logoutHandler],
  );

  if (!isClient) {
    return (
      <AccountLayout>
        <Tabs values={defaultTabs}>
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
