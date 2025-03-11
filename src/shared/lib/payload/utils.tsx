import { type ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { InfoCard } from '@/features/policies/components';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';
import { TitleLevel } from '@/shared/ui/kit/title/types';

import st from './styles.module.scss';
import { Node } from './types';

const infoKeywords = [
  'Email',
  'Phone',
  'Office Address',
  'Website',
  'Legal Entity',
  'Registered Address',
  'Registered Number',
];

export function parseJSONToElements(json: Node[]): {
  elements: ReactNode[];
  lastUpdate: string | null;
} {
  if (!Array.isArray(json)) return { elements: [<></>], lastUpdate: null };

  let lastUpdate: string | null = null;
  const elements: ReactNode[] = [];

  if (
    json[0].type === 'paragraph' &&
    json[0].children?.some(child => child.text?.includes('Last Updated'))
  ) {
    lastUpdate =
      json[0].children?.find(child => child.text?.includes('Last Updated'))
        ?.text ?? null;

    json.shift();
  }

  elements.push(...json.map(parseNode));

  return { elements, lastUpdate };
}

function parseNode(node: Node, listStyle = {}): React.ReactNode {
  if (node.type === 'heading') {
    const level = node.tag.slice(1);
    return (
      <Title
        key={nanoid()}
        level={Number(level) as TitleLevel}
        color="darkBlue"
        weight={500}
        uppercase={level === '3'}
        style={{ padding: '52px 0 22px 0' }}
      >
        {parseChildren(node.children)}
      </Title>
    );
  }

  if (node.type === 'paragraph') {
    const formattedChildren = node.children?.map(child => {
      if (child.type === 'text' && child.format === 1) {
        return (
          <span key={nanoid()} style={{ fontWeight: 600 }}>
            {child.text}
          </span>
        );
      }
      return parseChildren([child]);
    });

    return (
      <Text key={nanoid()} size="lg" style={{ lineHeight: 'normal' }}>
        {formattedChildren}
      </Text>
    );
  }

  if (node.type === 'link') {
    return (
      <a
        key={nanoid()}
        href={node.fields?.url}
        target={node.fields?.newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline', fontWeight: 600 }}
      >
        {parseChildren(node.children)}
      </a>
    );
  }

  if (node.type === 'list') {
    const listSt =
      node.listType === 'bullet'
        ? {
            listStyleType: 'disc',
            listPositionType: 'inside',
            marginLeft: '20px',
            color: '#0d2056',
            lineHeight: 'normal',
          }
        : {};

    const containsInfoCardItems = node.children?.some(item =>
      item.children?.some(child =>
        infoKeywords.some(keyword => child.text?.startsWith(keyword)),
      ),
    );

    const numberOfItems = node.children?.length || 0;

    let layoutStyle = '';

    if (containsInfoCardItems) {
      layoutStyle = numberOfItems > 3 ? st.grid : st.flex;
    }

    return (
      <ul key={nanoid()} style={{ padding: '30px 0' }} className={layoutStyle}>
        {parseChildren(node.children, listSt)}
      </ul>
    );
  }

  if (node.type === 'listitem') {
    const firstChildText = node.children?.[0]?.text?.trim() ?? '';
    const isInfoCard = infoKeywords.some(keyword =>
      firstChildText.startsWith(keyword),
    );

    if (isInfoCard) {
      const name = firstChildText.replace(':', '').trim();
      const valueNode = node.children?.slice(1) ?? [];

      const valueContent = valueNode.map(child => {
        if (
          child.type === 'autolink' &&
          child.fields?.url?.startsWith('mailto:')
        ) {
          return (
            <a key={nanoid()} href={child.fields.url}>
              {child.fields.url.replace('mailto:', '')}
            </a>
          );
        }
        if (child.type === 'link' && child.fields?.url) {
          return (
            <a
              key={nanoid()}
              href={child.fields.url}
              target={child.fields.newTab ? '_blank' : '_self'}
            >
              {child.fields.url}
            </a>
          );
        }
        return parseChildren([child]);
      });

      return (
        <InfoCard key={nanoid()} name={name} value={<>{valueContent}</>} />
      );
    }

    const children = node.children || [];

    const formattedChildren = children.map(child => {
      if (child.type === 'text' && child.format === 1) {
        return (
          <span key={nanoid()} style={{ fontWeight: 600 }}>
            {child.text}
          </span>
        );
      }
      return parseChildren([child]);
    });

    return (
      <li key={nanoid()} style={listStyle}>
        {formattedChildren}
      </li>
    );
  }

  if (node.type === 'text') {
    return node.text;
  }

  if (node.type === 'linebreak') {
    return <br key={nanoid()} />;
  }

  return null;
}

function parseChildren(children?: Node[], listStyle = {}) {
  if (!Array.isArray(children)) return '';
  return children.map(child => parseNode(child, listStyle));
}
