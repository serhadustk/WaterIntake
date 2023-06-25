//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {ChemicalGlass, Cup} from 'iconsax-react-native';
import moment from 'moment';
// create a component
const IntakeItem = ({item}) => {
  const [time, setTime] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <ChemicalGlass size="50" color={Colors.primary} variant="Bulk" />
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{color: Colors.black, fontWeight: '700', fontSize: 16}}>
          {item.amount + ' ' + item.unit}
        </Text>
      </View>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '500', fontSize: 16}}>
          {moment(item.createdAt).format('DD-MM-YYYY hh:mm')}
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.shadowColor,
  },
});

//make this component available to the app
export default IntakeItem;
