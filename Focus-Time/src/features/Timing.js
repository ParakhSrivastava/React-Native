import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return(
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title="30" onPress={() => onChangeTime(30)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title="45" onPress={() => onChangeTime(45)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  timingButton:{
    flex: 1,
    alignItems: 'center'
  }
});