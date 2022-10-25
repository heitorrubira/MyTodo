import React from 'react';
import {
  Title,
  Subtitle,
  Body,
  Props as StyledProps,
} from './styled';

export type Props = React.PropsWithChildren<
  Partial<StyledProps>
> & { type?: 'title' | 'subtitle' | 'body' };

export default function Text({
  children,
  type = 'body',
  color = 'default',
}: Props) {

  return ({
    title:
      <Title color={color}>{children}</Title>,
    subtitle:
      <Subtitle color={color}>{children}</Subtitle>,
    body:
      <Body color={color}>{children}</Body>
  }[type]);
};
export type TextType = typeof Text;
