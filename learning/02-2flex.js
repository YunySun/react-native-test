// 样式
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.flex}>
      <View style={[styles.flex, styles.powderblue]} />
      <View style={[styles.flex, styles.skyblue]} />
      <View style={[styles.flex, styles.steelblue]} />
    </View>
  );
};

const styles = StyleSheet.create({
  smallRect: {
    width: 50,
    height: 50,
  },
  middleRect: {
    width: 100,
    height: 100,
  },
  bigRect: {
    width: 150,
    height: 150,
  },
  powderblue: {
    backgroundColor: 'powderblue',
  },
  skyblue: {
    backgroundColor: 'skyblue',
  },
  steelblue: {
    backgroundColor: 'steelblue',
  },
  flex: {
    flex: 1,
  },
});

export default App;
