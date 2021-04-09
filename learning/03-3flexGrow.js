/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [powderBlue, setPowderBlue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
  });
  const [skyBlue, setSkyBlue] = useState({
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 100,
  });
  const [steelBlue, setSteelBlue] = useState({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 200,
  });
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          },
        ]}>
        <BoxInfo color="powderblue" {...powderBlue} setFlex={setPowderBlue} />
        <BoxInfo color="skyblue" {...skyBlue} setFlex={setSkyBlue} />
        <BoxInfo color="steelblue" {...steelBlue} setFlex={setSteelBlue} />
      </View>
      <View style={styles.previewContainer}>
        <View
          style={[
            styles.previewBox,
            {
              flexBasis: powderBlue.flexBasis,
              flexShrink: powderBlue.flexShrink,
              flexGrow: powderBlue.flexGrow,
              backgroundColor: 'powderblue',
            },
          ]}
        />
        <View
          style={[
            styles.previewBox,
            {
              flexBasis: skyBlue.flexBasis,
              flexShrink: skyBlue.flexShrink,
              flexGrow: skyBlue.flexGrow,
              backgroundColor: 'skyblue',
            },
          ]}
        />
        <View
          style={[
            styles.previewBox,
            {
              flexBasis: steelBlue.flexBasis,
              flexShrink: steelBlue.flexShrink,
              flexGrow: steelBlue.flexGrow,
              backgroundColor: 'steelblue',
            },
          ]}
        />
      </View>
    </View>
  );
};

const BoxInfo = ({color, flexBasis, flexGrow, flexShrink, setFlex}) => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View style={[styles.box, {backgroundColor: color}]}>
        <Text style={styles.boxLabel}>Box</Text>
      </View>
      <View>
        <Text style={styles.titleLabel}>flexBasis</Text>
        <TextInput
          style={styles.input}
          value={'' + flexBasis}
          onChangeText={(fb) => {
            setFlex((value) => {
              return {
                ...value,
                flexBasis: isNaN(parseInt(fb)) ? 'auto' : fb,
              };
            });
          }}
        />
      </View>
      <View>
        <Text style={styles.titleLabel}>flexShrink</Text>
        <TextInput
          style={styles.input}
          value={'' + flexGrow}
          onChangeText={(fg) => {
            setFlex((value) => {
              return {
                ...value,
                flexGrow: isNaN(parseInt(fg)) ? '' : fg,
              };
            });
          }}
        />
      </View>
      <View>
        <Text style={styles.titleLabel}>flexGrow</Text>
        <TextInput
          style={styles.input}
          value={'' + flexShrink}
          onChangeText={(fs) => {
            setFlex((value) => {
              return {
                ...value,
                flexShrink: isNaN(parseInt(fs)) ? '' : fs,
              };
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    minWidth: 80,
  },
  previewBox: {
    width: 50,
    height: 50,
  },
  boxLabel: {
    lineHeight: 50,
    textAlign: 'center',
    color: '#fff',
  },
  titleLabel: {
    marginTop: 6,
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 16,
  },
  input: {
    width: 50,
    paddingVertical: 3,
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },
});

export default App;
