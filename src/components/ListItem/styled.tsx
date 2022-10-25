import styled from 'styled-components';

export type Props = {
  hasPadding?: boolean;
};

export const Component = styled.li<Props>`
  display: flex;
  width: 100%;
  margin: 0;
  list-style-type: none;
  border: 1px solid ${({ theme }) =>
    theme.palette.common.hover};
  border-radius: ${({ theme }) =>
    theme.borderRadius}px;
  padding: ${({ theme, hasPadding }) =>
    hasPadding ? theme.gutter : 0}px;
  cursor: ${({ onClick }) => onClick && 'pointer'};

  &:hover {
    background-color:${({ theme, onClick }) =>
      onClick && theme.palette.common.hover};
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) =>
      theme.gutter}px;
  }
`;
