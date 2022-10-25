import styled, { css } from 'styled-components';
import { Component as ButtonStyled } from '../Button/styled';

export type Props = {};

const BaseComponent = css`
  padding: ${({ theme }) => theme.gutter}px;
`;

export const Header = styled.div`
  ${BaseComponent};
  padding-bottom: 0;
`;

export const Body = styled.div`
  ${BaseComponent};
`;

export const Footer = styled.div`
  ${BaseComponent};
  padding-top: 0;
  text-align: right;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${ButtonStyled}:not(:first-child) {
    margin-left: ${({ theme }) => theme.gutter}px;
  }
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #aaa;
  background-color: ${({ theme }) =>
    theme.palette.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  box-shadow: ${({ theme }) => theme.shadow};
`;
