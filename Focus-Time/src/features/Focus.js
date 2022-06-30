import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          label="What would you like to Focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => setCurrentSubject(subject)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight  
  },
  button:{
    justifyContent: 'center'
  },
  inputContainer: {
    padding: spacing.sm,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm
  }
});