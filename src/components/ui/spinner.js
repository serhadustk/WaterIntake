//import liraries
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from '../../theme/colors';
import {spinnerStyles} from '../../styles/ui/spinner';

const Spinner = () => {
  return (
    <View style={spinnerStyles.container}>
      <ActivityIndicator size={'large'} color={Colors.white} />
    </View>
  );
};

export default Spinner;
