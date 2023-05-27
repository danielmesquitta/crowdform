import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AuthParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type AppParamList = {
  Home: undefined;
};

export type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthParamList>,
  BottomTabNavigationProp<AppParamList>
>;
