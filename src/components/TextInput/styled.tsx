import styled, { keyframes, css } from 'styled-components';
import { Color } from '../../types';

export type Props = {
  color: Color;
  hasFocus: boolean;
  hasValue: boolean;
};

export const Component = styled.div<Props>`
  position: relative;
  display: flex;
  flex: 1;
  padding: ${({ theme }) => theme.gutter}px;
  border: 1px solid ${({ theme, color }) =>
    theme.palette[color].main};
  border-radius: ${({ theme }) =>
    theme.borderRadius}px;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const Input = styled.input<Props>`
  border: 0;
  font-size: 1em;
  display: block;
  width: 100%;
  color: inherit;
`;

export const LabelWrapper = styled.span<Props>`
  position: absolute;
  left: ${({ theme }) => theme.gutter}px;
  display: inline-block;
  padding: 0px 3px;
  color: ${({ theme, hasValue, color }) =>
    hasValue ? theme.palette[color].main : 'inherit'};

  transition: transform 0.3s;
  transform-origin: center left;
  transform: ${({ hasFocus, hasValue }) =>
    hasFocus || hasValue
      ? 'scale(.8) translate(0, -35px)'
      : 'translate(0, 6px)'};
`;

export const Label = styled.span<any>`
  position: relative;
  z-index: 2;
  color: inherit;
`;

export const LabelBackLayer = styled.span<any>`
  position: absolute;
  background: white;
  top: calc(50% + 1px);
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 2px;
  z-index: 1;

  transition: opacity 0.3s;
  opacity: ${({ hasFocus, hasValue }) =>
    hasFocus || hasValue ? 1 : 0};
`;
