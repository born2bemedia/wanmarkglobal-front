'use client';

import { ReactElement } from 'react';

import { useHover } from '@/shared/lib/hooks';
import { motion } from '@/shared/lib/motion';
import { Minus } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './order-card.module.scss';

export function OrderCard({
  title,
  icon,
  price,
  color,
  onDelete,
}: {
  title: string;
  icon: ReactElement<{
    dangerouslySetInnerHTML: {
      __html: string;
    };
  }>;
  price: string;
  color: string;
  onDelete: () => void;
}) {
  const element = (hovered: boolean) => (
    <section className={st.wrapper}>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <button className={st.deleteBtn} onClick={onDelete}>
            <Minus />
          </button>
        </motion.div>
      )}
      <article className={st.layout}>
        <section className={st.title}>
          {icon ? (
            <div
              className={st.icon}
              dangerouslySetInnerHTML={icon.props.dangerouslySetInnerHTML}
            />
          ) : null}
          <Text color="darkBlue" size="lg" weight={500}>
            {title}
          </Text>
        </section>
        <Title level={5} weight={500} style={{ color }} uppercase>
          €{price}
        </Title>
      </article>
    </section>
  );

  const [hoverable] = useHover(element);

  return <div>{hoverable}</div>;
}
