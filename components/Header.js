import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Header;
