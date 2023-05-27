import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import CheckBox from '../../../components/CheckBox';
import { NavigationProp } from '../../../routes/types';
import {
  Container,
  Link,
  LinkText,
  StyledButton,
  StyledInput,
  Title,
} from '../styles';

export const SignUp = () => {
  const { navigate } = useNavigation<NavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      acceptedTerms: false,
    },
  });

  const onSubmit = () => {
    navigate('Home');
  };

  return (
    <Container>
      <Title>Create your account</Title>

      <Controller
        control={control}
        rules={{
          required: { message: 'First Name is required', value: true },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="Enter your First Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="First Name"
            error={errors.firstName?.message}
          />
        )}
        name="firstName"
      />

      <Controller
        control={control}
        rules={{
          required: { message: 'Last Name is required', value: true },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledInput
            placeholder="Enter your Last Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Last Name"
            secureTextEntry
            error={errors.lastName?.message}
          />
        )}
        name="lastName"
      />

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

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            onValueChange={onChange}
            value={value}
            label="I am over 18 years of age and I have read and agree to the Terms of Service and Privacy policy."
          />
        )}
        name="acceptedTerms"
      />

      <StyledButton onPress={handleSubmit(onSubmit)}>
        Create account
      </StyledButton>

      <Link>
        <LinkText>Already have an account? Log in here</LinkText>
      </Link>
    </Container>
  );
};
