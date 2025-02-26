'use client';

import { JSX } from 'react';
import Link from 'next/link';

import { Butterfly, FiveDots, Stairs } from '@/shared/ui/icons';
import { Tag } from '@/shared/ui/kit/tag';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import st from './stories.module.scss';
import { StoryPreview } from './types';

const stories: StoryPreview[] = [
  { id: '1', title: 'Story 1', type: 'Heading', color: 'blue' },
  { id: '2', title: 'Story 2', type: 'Heading', color: 'purple' },
  { id: '3', title: 'Story 3', type: 'Heading', color: 'pink' },
];

export function Stories() {
  return (
    <section className={st.layout}>
      <section className={st.titleLayout}>
        <Title level={3} weight={500}>
          Real Markets. Real Challenges. Real Solutions.
        </Title>
        <Text color="black">
          Examples Speak Louder Than Words. See How Businesses Navigate Success.
        </Text>
      </section>
      <section className={st.storiesLayout}>
        {stories.map(({ id, type, color, title }) => (
          <StoryCard key={id} id={id} title={title} color={color} type={type} />
        ))}
      </section>
    </section>
  );
}

export function StoryCard({
  id,
  type,
  color,
  title,
}: {
  id: string;
  title: string;
  type: string;
  color: 'pink' | 'blue' | 'purple';
}) {
  const icons: Record<string, JSX.Element> = {
    pink: <Stairs color="#FFD2FB" height="22" width="22" />,
    blue: <FiveDots width="23" height="22" />,
    purple: <Butterfly color="#D3CBFF" width="21" height="22" />,
  };
  const imagesSrc: Record<string, string> = {
    blue: '/articles/blue.png',
    purple: '/articles/purple.png',
    pink: '/articles/pink.png',
  };

  return (
    <article>
      <section className={st.storyCardTitle}>
        <div className={st.storyCardHeader}>
          {icons[color]}
          <Title level={5} weight={500}>
            {title}
          </Title>
        </div>
        <Link href={`/stories/${id}`} className={st.storyCardLink}>
          <Text color="darkBlue">READ FULL STORY</Text>
        </Link>
      </section>
      <section>
        <div
          className={st.storyCardImage}
          style={{
            backgroundImage: `url(${imagesSrc[color]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Tag className={st.storyTag}>
            <Text color="darkBlue">{type}</Text>
          </Tag>
        </div>
      </section>
    </article>
  );
}
