//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getIntakes} from '../../redux/actions/intakesActions';
import {Colors} from '../../theme/colors';

// create a component
const Intakes = () => {
  const intakes = useSelector(state => state.intake.intakes);
  const pending = useSelector(state => state.intake.pending);
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    dispatch(getIntakes());
  }, []);
  console.log(intakes);
  return (
    <View style={styles.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      ) : (
        <Text>Intakes</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Intakes;
