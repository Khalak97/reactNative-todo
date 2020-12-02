import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add todo..."
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnPlus}>+</Text>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
  },
  btnPlus: {
    fontSize: 30,
    color: 'green',
    marginRight: 10,
  },
});

export default AddItem;
