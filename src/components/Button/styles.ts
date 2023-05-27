import styled from 'styled-components/native';
import { colors } from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  height: 58px;
  width: 100%;
  background-color: ${colors.primary300};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;
