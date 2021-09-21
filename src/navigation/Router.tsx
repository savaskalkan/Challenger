import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {List, Basket} from '../screens';

const Stack = createStackNavigator();
export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //tabBar={props => <TokenTopBar {...props} />}
        //screenOptions={{headerShown: false}}
        initialRouteName={'List'}>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Basket" component={Basket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
