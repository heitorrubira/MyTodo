import React, { useState, useRef } from 'react';
import {
  Component,
  Input,
  Label,
  LabelBackLayer,
  LabelWrapper,
  Props as ComponentProps,
} from './styled';

export type Props = {
  label?: string;
  defaultValue?: string;
} & Partial<
  Omit<ComponentProps, 'hasFocus' | 'hasValue'>
>;

export default function TextInput({
  label = 'Placeholder',
  color = 'primary',
  defaultValue,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [charCount, setCharCount] = useState(defaultValue?.length || 0);

  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    inputRef.current?.focus();
    event.stopPropagation();
  };
  const onChange = (event: any) => {
    setCharCount(event.target.value?.length);
  };
  const onFocus = () => setHasFocus(true);
  const onBlur = () => setHasFocus(false);

  const hasValue = charCount > 0;
  return (
    <Component
      onClick={onClick}
      color={color}
      hasFocus={hasFocus}
      hasValue={hasValue}
    >
      {label && (
        <LabelWrapper
          color={color}
          hasFocus={hasFocus}
          hasValue={hasValue}
        >
          <LabelBackLayer hasFocus={hasFocus} hasValue={hasValue} />
          <Label>{label}</Label>
        </LabelWrapper>
      )}
      <Input
        ref={inputRef}
        color={color}
        hasFocus={hasFocus}
        hasValue={hasValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
    </Component>
  );
}