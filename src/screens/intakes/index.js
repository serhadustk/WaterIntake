//import liraries
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getIntakes} from '../../redux/actions/intakesActions';
import {Colors} from '../../theme/colors';
import IntakeItem from '../../components/intakes/intakeItem';
import IntakesListHeader from '../../components/intakes/intakesListHeader';
import {intakesStyles} from '../../styles/intakes';
import Spinner from '../../components/ui/spinner';

const Intakes = () => {
  const intakes = useSelector(state => state.intake.intakes);
  const pending = useSelector(state => state.intake.pending);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIntakes());
  }, []);
  return (
    <View style={intakesStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={intakes}
          keyExtractor={item => item.id}
          ListHeaderComponent={<IntakesListHeader />}
          renderItem={({item}) => <IntakeItem item={item} />}
        />
      )}
    </View>
  );
};

export default Intakes;
