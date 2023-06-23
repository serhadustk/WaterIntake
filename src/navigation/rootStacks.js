import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {GOAL, HOME} from '../utils/routes';
import Goal from '../screens/goal';

const Stack = createNativeStackNavigator();

function RootStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={GOAL} component={Goal} />
    </Stack.Navigator>
  );
}

export default RootStacks;
