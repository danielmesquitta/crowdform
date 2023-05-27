import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../views/Auth/Login';
import { SignUp } from '../views/Auth/SignUp';

const Stack = createNativeStackNavigator();

export const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ title: '' }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
