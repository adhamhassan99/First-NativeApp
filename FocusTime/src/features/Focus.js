import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {paddingSizes, fontSizes} from '../utils/sizes';
import {TextInput} from 'react-native-paper';
import {colors} from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';

const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: paddingSizes.sm,
  },
  inputContainer: {
    padding: paddingSizes.sm,
    flexDirection: 'row',
  },
});

export default Focus;
