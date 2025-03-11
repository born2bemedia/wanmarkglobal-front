import { createElement, type ReactNode } from 'react';
import { nanoid } from 'nanoid';

import { InfoCard } from '@/features/policies/components';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

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

export function parseJSONToElements(json: Node[]): ReactNode[] {
  if (!Array.isArray(json)) return [<></>];

  return json.map(parseNode);
}

function parseNode(node: Node, listStyle = {}): React.ReactNode {
  if (node.type === 'heading') {
    const level = node.tag.slice(1);
    return (
      <Title
        level={Number(level)}
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
    return (
      <Text
        key={nanoid()}
        size="lg"
        weight={300}
        color="mediumBlue"
        style={{ lineHeight: 'normal' }}
      >
        {parseChildren(node.children)}
      </Text>
    );
  }

  if (node.type === 'list') {
    const listSt =
      node.listType === 'bullet'
        ? {
            listStyleType: 'disc',
            listPositionType: 'inside',
            marginLeft: '20px',
            color: '#3D4D7C',
            lineHeight: 'normal',
          }
        : {};

    // Check if any item in the list contains the info keywords
    const containsInfoCardItems = node.children?.some(item =>
      item.children?.some(child =>
        infoKeywords.some(keyword => child.text.startsWith(keyword)),
      ),
    );

    // Check the number of elements in the list
    const numberOfItems = node.children?.length || 0;

    let layoutStyle = {};

    if (containsInfoCardItems) {
      // Apply grid layout for more than 3 items, otherwise apply flex layout
      layoutStyle =
        numberOfItems > 3
          ? {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }
          : { display: 'flex', gap: '12px', width: '100%' };
    }

    return (
      <ul key={nanoid()} style={layoutStyle}>
        {parseChildren(node.children, listSt)}
      </ul>
    );
  }

  if (node.type === 'listitem') {
    const childrenText = node.children
      ?.map(child => child.text)
      .join(' ')
      .trim();

    const isInfoCard = infoKeywords.some(keyword =>
      childrenText.startsWith(keyword),
    );

    if (isInfoCard) {
      const [name, value] = childrenText.split(':').map(part => part.trim());
      return <InfoCard key={nanoid()} name={name} value={value} />;
    }

    return (
      <li key={nanoid()} style={listStyle}>
        <Text color="mediumBlue" weight={300}>
          {parseChildren(node.children)}
        </Text>
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
