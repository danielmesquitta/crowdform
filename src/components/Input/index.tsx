import { useState } from 'react';
import { TextInput } from 'react-native';
import { colors } from '../../styles/colors';
import {
  Container,
  ErrorText,
  Icon,
  IconContainer,
  Label,
  TextInputContainer,
} from './styles';
import { InputProps } from './types';

export const Input = ({
  label,
  secureTextEntry,
  error,
  style,
  ...rest
}: InputProps) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <Container style={style}>
      <Label>{label}</Label>

      <TextInputContainer>
        <TextInput
          secureTextEntry={isPasswordHidden && secureTextEntry}
          placeholderTextColor={colors.gray700}
          {...rest}
        />

        {secureTextEntry && (
          <IconContainer
            onPress={() => setIsPasswordHidden((prevValue) => !prevValue)}
          >
            <Icon
              size={20}
              name={isPasswordHidden ? 'eye-outline' : 'eye-off-outline'}
              color={colors.black}
            />
          </IconContainer>
        )}
      </TextInputContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
