import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';

// Import screens
import Welcome from '../screens/Login/Welcome';
import Login from '../screens/Login/Login';
import TeacherTabNavigator from './TeacherTabNavigator';

const Stack = createStackNavigator();

const AppLayout = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TeacherDashboard"
              component={TeacherTabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default AppLayout;