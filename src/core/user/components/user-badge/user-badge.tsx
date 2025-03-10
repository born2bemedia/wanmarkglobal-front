'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';

import { useLoginModalStore } from '@/core/auth/services/auth.store';

import { cookies } from '@/shared/lib/browser';
import { cn } from '@/shared/lib/styles';
import { Enter } from '@/shared/ui/icons';
import { Avatar } from '@/shared/ui/kit/avatar/avatar';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

import { useUserStore } from '../../services/user.store';
import st from './user-badge.module.scss';

export function UserBadge({ className }: { className?: string }) {
  const { setOpen } = useLoginModalStore();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

  const initials = useMemo(() => user?.firstName[0] ?? '', [user?.firstName]);

  return user ? (
    <Link href="/account" className={cn(st.badge, className)}>
      <Text color="mediumBlue" weight={500}>
        {user.firstName} {user.lastName}
      </Text>
      <Avatar initials={initials} />
    </Link>
  ) : (
    <Button variant="grey" className={className} onClick={() => setOpen(true)}>
      <Text weight={500}>Login</Text>
      <Enter />
    </Button>
  );
}
