import { JSX } from 'react';

import { Complete, Decline, Progress, Wait } from '@/shared/ui/icons';

export const statusIcon: Record<string, () => JSX.Element> = {
  pending: Wait,
  processing: Progress,
  completed: Complete,
  cancelled: Decline,
};

export const paymentIcon: Record<string, () => JSX.Element> = {
  failed: Decline,
  awaitingPayment: Wait,
  paid: Complete,
};
