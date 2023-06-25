//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../theme/colors';
import {ChemicalGlass, Cup} from 'iconsax-react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
// create a component
const IntakesListHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginVertical: 5,
          paddingVertical: 20,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <ChemicalGlass size="50" color={Colors.primary} variant="Bulk" />
          <View style={{marginLeft: 3}}>
            <Text style={{color: 'gray', fontSize: 10, marginBottom: 5}}>
              Ideal water intake
            </Text>
            <Text
              style={{color: Colors.black, fontSize: 16, fontWeight: '700'}}>
              2000 ml
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          <Cup size="50" color={'#ff8a65'} variant="Bulk" />
          <View style={{marginLeft: 3}}>
            <Text style={{color: 'gray', fontSize: 10, marginBottom: 5}}>
              Water intake goal
            </Text>
            <Text
              style={{color: Colors.black, fontSize: 16, fontWeight: '700'}}>
              2810 ml
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          padding: 20,
          marginVertical: 5,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CircularProgress
          activeStrokeColor={Colors.primary}
          inActiveStrokeColor={Colors.shadowColor}
          value={50}
          radius={100}
          duration={2000}
          progressValueColor={Colors.primary}
          maxValue={100}
          title={'700/1850 ml'}
          titleColor={Colors.black}
          titleStyle={{fontWeight: '500', fontSize: 16}}
          valueSuffix={'%'}
        />
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <View
            style={{
              flex: 1,
              margin: 5,
            }}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                padding: 5,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                Day
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              margin: 5,
            }}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                padding: 5,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                Week
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              margin: 5,
            }}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: Colors.primary,
                padding: 5,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                Month
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

//make this component available to the app
export default IntakesListHeader;
