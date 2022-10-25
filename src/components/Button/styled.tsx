import styled from 'styled-components';
import { Color } from '../../types';

export type Props = {
  color: Color;
};

export const Component = styled
  .button<Props>`
    border: 0;
    padding: 14px 18px;
    border-radius: ${({ theme }) => theme.borderRadius}px;
    background-color: ${({ theme, color }) =>
      theme.palette[color].main};
    color: ${({ theme, color }) =>
      theme.palette[color].contrastText};
    font-family: Lato;
    font-weight: bold;
    font-size: 1em;
    line-height: 1em;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme, color }) =>
        theme.palette[color].light};
    }

    &:active {
      background-color: ${({ theme, color }) =>
        theme.palette[color].dark};
    }
  `;