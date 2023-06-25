import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intakes from '../screens/intakes';
import {GOAL, INTAKES} from '../utils/routes';
import Goal from '../screens/goal';
import {Colors} from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={INTAKES} component={Intakes} />
      <Stack.Screen name={GOAL} component={Goal} />
    </Stack.Navigator>
  );
}

export default RootStacks;
