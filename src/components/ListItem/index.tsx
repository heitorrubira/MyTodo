import React from 'react';
import {
  Component,
} from './styled';

export type Props = React.PropsWithChildren<{
  onClick?: (event: React.SyntheticEvent) => void;
}>;

export default function ListItem({
  children,
  onClick,
}: Props) {
  const childrenType = typeof children;
  return (
    <Component
      hasPadding={childrenType === 'string'}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
export type ListItemType = typeof ListItem;
