'use client';

import { useRouter } from 'next/navigation';

import { ArrowTopRightCircle } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit/button';
import { Dialog } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { getRandomIcon } from '../../lib/utils';
import st from './empty-cart-dialog.module.scss';

export function EmptyCartDialog({
  open,
  onOpen,
}: {
  open: boolean;
  onOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  const icon = getRandomIcon();

  return (
    <Dialog
      open={open}
      onOpenChange={onOpen}
      layoutClassName={st.layoutDialog}
      hideCloseBtn
    >
      <section className={st.layout}>
        <div className={st.text}>
          <Title level={5} weight={500} color="darkBlue" uppercase>
            Your Selected Services
          </Title>
          <Text color="lightBlue">
            You haven’t added any services yet. Explore our business and
            marketing consulting solutions to find the right fit for your goals.
          </Text>
        </div>
        {icon}
        <Button
          variant="black"
          onClick={() => {
            router.push('/');
            onOpen(false);
          }}
        >
          Start here
          <ArrowTopRightCircle color="black" />
        </Button>
      </section>
    </Dialog>
  );
}
