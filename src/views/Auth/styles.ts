import styled from 'styled-components/native';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { colors } from '../../styles/colors';

export const Container = styled.View`
  padding: 0 20px;
  border-top-color: ${colors.gray100};
  border-top-width: 1px;
  background-color: white;
  flex: 1;
`;

export const Title = styled.Text`
  margin: 20px auto 32px;
  color: black;
  font-weight: 600;
  font-size: 18px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const Link = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const LinkText = styled.Text`
  color: ${colors.gray700};
  font-size: 12px;
`;
