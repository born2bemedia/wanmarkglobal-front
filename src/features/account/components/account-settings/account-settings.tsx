'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { logout } from '@/core/auth/services/logout.action';
import { useUserStore } from '@/core/user/services/user.store';

import { type Document, type Order } from '@/features/account/lib/types';

import { TabContent, Tabs } from '@/shared/ui/kit/tabs';

import { AccountLayout } from '../account-layout';
import { Documents } from '../documents';
import { Orders } from '../orders';
import { PersonalInfo } from '../personal-info';

const getDefaultTabs = (t: ReturnType<typeof useTranslations>) => [
  {
    id: 'yourOrders',
    label: t('tabs.yourOrders', { fallback: 'Your Orders' }),
  },
  {
    id: 'yourDocuments',
    label: t('tabs.yourDocuments', { fallback: 'Your Documents' }),
  },
  {
    id: 'yourData',
    label: t('tabs.yourData', { fallback: 'Your Data' }),
  },
];

export function AccountSettings({
  orders,
  documents,
}: {
  orders: Order[];
  documents: Document[];
}) {
  const [width, setWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { setUser } = useUserStore();
  const t = useTranslations('account.settings');

  const logoutHandler = useCallback(async () => {
    setUser(null);
    await logout();
  }, [setUser]);

  const defaultTabs = useMemo(() => getDefaultTabs(t), [t]);

  const tabs = useMemo(
    () =>
      width <= 768
        ? defaultTabs
        : [
            ...defaultTabs,
            {
              id: 'logOut',
              label: t('logOut', { fallback: 'Log Out' }),
              onClick: logoutHandler,
            },
          ],
    [width, logoutHandler, defaultTabs, t],
  );

  if (!isClient) {
    return (
      <AccountLayout>
        <Tabs values={defaultTabs}>
          <TabContent id="yourOrders">
            <Orders values={orders} />
          </TabContent>
          <TabContent id="yourDocuments">
            <Documents values={documents} />
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
          <Documents values={documents} />
        </TabContent>
        <TabContent id="yourData">
          <PersonalInfo />
        </TabContent>
      </Tabs>
    </AccountLayout>
  );
}
