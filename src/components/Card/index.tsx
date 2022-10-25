import React from 'react';
import { Component, Body, Header, Footer } from './styled';
import Text from '../Text';

export type Props = React.PropsWithChildren<{
  title?: string;
  buttons?: React.ReactNode[];
}>;

export default function Card({
  children,
  title,
  buttons,
}: Props) {
  return (
    <Component>
      {title && (
        <Header>
          <Text type="title" color="primary">
            {title}
          </Text>
        </Header>
      )}
      <Body>
        {children}
      </Body>
      {buttons && (
        <Footer>
          {React.Children.map(buttons, (child, idx) => 
            child ??
              React.cloneElement(child, { key: `cb-${idx}`, ...child.props })
          )}
        </Footer>
      )}
    </Component>
  );
}
export type CardType = typeof Card;
export type HeaderType = typeof Header;
export type FooterType = typeof Footer;
export type BodyType = typeof Body;
