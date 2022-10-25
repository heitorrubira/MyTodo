import React from 'react';
import { Component } from './styled';
import { ListItemType } from '../ListItem';

export type Props = {
  children?:
    React.ReactElement<ListItemType> | 
    React.ReactElement<ListItemType>[];
};

export default function List({
  children,
}: Props) {
  return (
    <Component>
      {children}
    </Component>
  );
}
export type ListType = typeof List;
