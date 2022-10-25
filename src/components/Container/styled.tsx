import styled from 'styled-components';

export type Props = {
  bgColor?: string;
}

export const Component = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.palette.background.default};
`;
