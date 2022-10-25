import React from 'react';
import { Component } from './styled';

export type Props = React.PropsWithChildren<{}>;

export default function Box({ children }: Props) {
  return (
    <Component>
      {children}
    </Component>
  );
}
