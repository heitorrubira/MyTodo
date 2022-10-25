import React from 'react';
import {
  Component,
  Props as ComponentProps,
} from './styled';

export type Props = React.PropsWithChildren<{
  onClick?: (event: React.SyntheticEvent) => void;
}> & Partial<ComponentProps>;

export default function Button({
  children,
  color = 'primary',
  onClick,
}: Props) {
  return (
    <Component color={color} onClick={onClick}>
      {children}
    </Component>
  );
}
export type ButtonType = typeof Button;
