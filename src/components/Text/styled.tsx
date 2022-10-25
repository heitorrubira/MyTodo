import styled, { css } from 'styled-components';
import { Color } from '../../types';

export type Props = {
  color: Color | 'default';
};

const BaseComponent = css<Props>`
  display: flex;
  flex: 1;
  color: ${({ theme, color }) =>
    color === 'default'
      ? theme.palette.common.black
      : theme.palette[color].main};
  font-family: Lato;
  padding: 0;
  margin: auto;
  border: 0;
`;


export const Title = styled.h1<Props>`
  ${BaseComponent};
`;

export const Subtitle = styled.h3<Props>`
  ${BaseComponent};
`;

export const Body = styled.p<Props>`
  ${BaseComponent};
`;