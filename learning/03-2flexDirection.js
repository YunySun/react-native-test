/* eslint-disable react-native/no-inline-styles */
// 样式
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <PreviewLayout
      label="flexDirection"
      values={['column', 'row', 'row-reverse', 'column-reverse']}
      selectValue={flexDirection}
      setSelectValue={setFlexDirection}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectValue,
  setSelectValue,
}) => {
  return (
    <View style={{padding: 10, flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => {
          return (
            <TouchableOpacity
              key={value}
              style={[styles.button, selectValue === value && styles.selected]}
              onPress={() => {
                setSelectValue(value);
              }}>
              <Text
                style={[
                  styles.buttonLabel,
                  selectValue === value && styles.selectedLabel,
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.container, {[label]: selectValue}]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    minWidth: '48%',
    // paddingHorizontal: 8,
    padding: (8, 6, 8, 6),
    // paddingVertical: 6,
    marginBottom: 6,
    marginHorizontal: '1%',
    alignSelf: 'flex-start',
    backgroundColor: 'oldlace',
    borderRadius: 4,
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
  },
  buttonLabel: {
    color: 'coral',
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'center',
  },
  selectedLabel: {
    color: '#fff',
  },
});

export default App;
