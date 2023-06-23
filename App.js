// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStacks from './src/navigation/rootStacks';

function App() {
  return (
    <NavigationContainer>
      <RootStacks />
    </NavigationContainer>
  );
}

export default App;
