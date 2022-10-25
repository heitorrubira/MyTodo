import React from 'react';
import { Component, type Props as ComponentProps } from './styled';

export type Props = React.PropsWithChildren<Partial<ComponentProps>>;

export default function Flex({
  children,
  direction = 'column',
  align = 'left',
  space = 0,
}: Props) {

  return (
    <Component
      direction={direction}
      align={align}
      space={space}
    >
      {children}
    </Component>
  );
}
