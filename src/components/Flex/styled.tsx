import styled from 'styled-components';
import { Component as Box } from '../Box/styled';

type Direction = 'row' | 'column';
type Align = 'right' | 'left' | 'center';
type Space = number;

const justifyContent = (align: Align) => (
  {
    right: 'flex-end',
    left: 'flex-start',
    center: 'center',
  }[align]
);

export type Props = {
  direction: Direction;
  align: Align;
  space: Space;
};

export const Component = styled.div<Props>`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ align }) => justifyContent(align)};

  ${({ space, theme, direction }) => {
    const s = space * theme.space;

    return `
      margin-${direction === 'column' ? 'top' : 'left'}: -${s}px;
    `;
  }}
    
  & > ${Box} {
    ${({ space, theme, direction }) => {
      const s = space * theme.space;

      return `
        padding-${direction === 'column' ? 'top' : 'left'}: ${s}px;
      `;
    }}
  }
`;