import { Container, Text } from './styles';
import { ButtonProps } from './types';

export const Button = ({ children, ...rest }: ButtonProps) => (
  <Container {...rest}>
    <Text>{children}</Text>
  </Container>
);
