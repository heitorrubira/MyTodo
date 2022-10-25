import React from 'react';
import { Component, type Props as ComponentProps } from './styled';

export type Props = React.PropsWithChildren<ComponentProps>;

export default function Container({
  children,
  bgColor,
}: Props) {
  return (
    <Component bgColor={bgColor}>
      {children}
    </Component>
  );
}