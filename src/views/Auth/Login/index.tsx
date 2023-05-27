import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { NavigationProp } from '../../../routes/types';
import {
  Container,
  Link,
  LinkText,
  StyledButton,
  StyledInput,
  Title,
} from '../styles';

export const Login = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {
    navigate('Home');
  };

  return (
    <Container>
      <Title>Login</Title>

      <Controller
        control={control}
        rules={{
          required: { message: 'E-mail is required', value: true },
          pattern: { message: 'E-mail is not valid', value: /\S+@\S+\.\S+/ },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="Enter a valid e-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="E-mail"
            error={errors.email?.message}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: { message: 'Password is required', value: true },
          minLength: {
            message: 'Password must be greater than 8 characters',
            value: 8,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="Minimum 8 characters"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Password"
            secureTextEntry
            error={errors.password?.message}
          />
        )}
        name="password"
      />

      <StyledButton onPress={handleSubmit(onSubmit)}>Login</StyledButton>

      <Link onPress={() => navigate('SignUp')}>
        <LinkText>Don’t have an account? Sign up here</LinkText>
      </Link>
    </Container>
  );
};
