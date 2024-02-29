import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/screens/Dashboard';
import RolesScreen from './components/screens/RolesScreen';
import ChecklistScreen from './components/screens/ChecklistScreen';
import VisualizationScreen from './components/screens/VisualizationScreen';
import SettingsScreen from './components/screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Authentication stack navigator
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  </Stack.Navigator>
);

// Dashboard drawer navigator
const DashboardDrawer = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Roles" component={RolesScreen} />
    <Drawer.Screen name="Checklist" component={ChecklistScreen} />
    <Drawer.Screen name="Visualization" component={VisualizationScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
