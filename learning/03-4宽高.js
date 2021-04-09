import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [widthState, setWidthState] = useState('auto');
  const [heightState, setHeightState] = useState('auto');
  return (
    <PreviewLayout
      widthParamArr={['auto', 300, '80%']}
      heightParamArr={['auto', 200, '60%']}
      width={widthState}
      height={heightState}
      setWidth={setWidthState}
      setHeight={setHeightState}>
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  widthParamArr,
  heightParamArr,
  width,
  height,
  setWidth,
  setHeight,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.controls]}>
        <View style={[styles.title]}>
          <Text style={[styles.titleLabel]}>Width</Text>
        </View>
        {widthParamArr.map((param) => {
          return (
            <TouchableOpacity
              style={[styles.control, width === param && styles.selected]}
              key={param}
              onPress={() => {
                setWidth(() => {
                  return param;
                });
              }}>
              <View>
                <Text
                  style={[
                    styles.controlLabel,
                    width === param && styles.selectedLabel,
                  ]}>
                  {param}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.controls]}>
        <View style={[styles.title]}>
          <Text style={[styles.titleLabel]}>Height</Text>
        </View>
        {heightParamArr.map((param) => {
          return (
            <TouchableOpacity
              style={[styles.control, height === param && styles.selected]}
              key={param}
              onPress={() => {
                setHeight(() => {
                  return param;
                });
              }}>
              <View>
                <Text
                  style={[
                    styles.controlLabel,
                    height === param && styles.selectedLabel,
                  ]}>
                  {param}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.previewContainer, {width: width, height: height}]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  previewContainer: {
    backgroundColor: 'aliceblue',
    padding: 15,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    marginRight: 10,
  },
  titleLabel: {
    fontSize: 20,
  },
  control: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: 'oldlace',
    marginHorizontal: 10,
    borderRadius: 4,
  },
  selected: {
    backgroundColor: 'coral',
  },
  controlLabel: {
    color: 'coral',
  },
  selectedLabel: {
    color: '#fff',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default App;
