import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.View``;

export const Label = styled.Text`
  color: ${colors.gray700};
  margin-left: 5px;
  font-size: 11px;
`;

export const TextInputContainer = styled.View`
  background-color: ${colors.gray100};
  border-radius: 4px;
  height: 48px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const TextInput = styled.TextInput`
  color: ${colors.black};
  flex: 1;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 10px;
`;

export const Icon = styled(Ionicons).attrs({
  size: 20,
  color: colors.gray700,
})``;

export const ErrorText = styled.Text``;
