// 样式
import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={[styles.smallRect, styles.powderblue]} />
      <View style={[styles.middleRect, styles.skyblue]} />
      <View style={[styles.bigRect, styles.steelblue]} />
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
});

export default App;
