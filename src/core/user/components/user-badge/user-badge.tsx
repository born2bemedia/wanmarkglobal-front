'use client';

import { useEffect, useMemo, useState } from 'react';

import { useLoginModalStore } from '@/core/auth/services/auth.store';

import { cookies } from '@/shared/lib/browser';
import { Enter } from '@/shared/ui/icons';
import { Avatar } from '@/shared/ui/kit/avatar/avatar';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { User } from '../../lib/types';
import st from './user-badge.module.scss';

export function UserBadge() {
  const { setOpen } = useLoginModalStore();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = JSON.parse(storedUser ?? '');
    setUser(parsedUser === '' ? null : parsedUser);
  }, []);

  const initials = useMemo(() => user?.firstName[0] ?? '', [user?.firstName]);

  return user ? (
    <section className={st.badge}>
      <Text color="mediumBlue" weight={500}>
        {user.firstName} {user.lastName}
      </Text>
      <Avatar initials={initials} />
    </section>
  ) : (
    <Button variant="grey" onClick={() => setOpen(true)}>
      <Text weight={500}>Login</Text>
      <Enter />
    </Button>
  );
}
