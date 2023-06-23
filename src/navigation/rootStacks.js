import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intakes from '../screens/intakes';
import {GOAL, INTAKES} from '../utils/routes';
import Goal from '../screens/goal';

const Stack = createNativeStackNavigator();

function RootStacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={INTAKES} component={Intakes} />
      <Stack.Screen name={GOAL} component={Goal} />
    </Stack.Navigator>
  );
}

export default RootStacks;
