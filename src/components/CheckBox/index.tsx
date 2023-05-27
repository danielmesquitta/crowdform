import ExpoCheckBox from 'expo-checkbox';
import React from 'react';
import { colors } from '../../styles/colors';
import { Container, Label } from './styles';
import { CheckBoxProps } from './types';

export default function CheckBox({
  label,
  value,
  onValueChange,
  ...props
}: CheckBoxProps) {
  const toggleValue = () => {
    if (onValueChange) onValueChange(!value);
  };

  return (
    <Container onPress={toggleValue}>
      <ExpoCheckBox
        color={value ? colors.primary300 : undefined}
        value={value}
        {...props}
      />

      <Label>{label}</Label>
    </Container>
  );
}
