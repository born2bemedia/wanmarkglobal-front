'use client';

import st from './avatar.module.scss';

export function Avatar({ initials }: { initials: string }) {
  return <span className={st.avatar}>{initials}</span>;
}
