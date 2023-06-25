// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStacks from './src/navigation/rootStacks';
import {Provider} from 'react-redux';
import store from './src/redux';
import {StatusBar} from 'react-native';
import {Colors} from './src/theme/colors';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={Colors.primary}
          barStyle={'light-content'}
        />

        <RootStacks />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
