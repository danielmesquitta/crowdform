import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../styles/colors';
import { Home } from '../views/App/Home';

const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarLabelStyle: {
          display: 'flex',
          backgroundColor: colors.white,
          fontSize: 11,
          marginTop: -24,
          marginBottom: 24,
        },
        tabBarStyle: {
          height: 86,
        },
        tabBarActiveTintColor: colors.primary300,
        tabBarInactiveTintColor: colors.black,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home-sharp" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="swap-horizontal" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="pie-chart-outline" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
