import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [title] = useState('position');
  const [position, setPosition] = useState('relative');
  return (
    <PreviewLayout
      title={title}
      positionArr={['relative', 'absolute']}
      position={position}
      setPosition={setPosition}>
      <View style={[styles.box, styles.box1, {position: position}]} />
      <View style={[styles.box, styles.box2, {position: position}]} />
      <View style={[styles.box, styles.box3, {position: position}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  children,
  title,
  positionArr,
  position,
  setPosition,
}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.title]}>
        <Text style={[styles.titleLabel]}>{title}</Text>
      </View>
      <View style={[styles.controls]}>
        {positionArr.map((p) => {
          return (
            <TouchableOpacity
              style={[styles.control, position === p && styles.selected]}
              key={p}
              onPress={() => {
                setPosition(p);
              }}>
              <View>
                <Text
                  style={[
                    styles.controlLabel,
                    position === p && styles.selectedLabel,
                  ]}>
                  {p}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={[styles.previewContainer]}>{children}</View>
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
    flex: 1,
    backgroundColor: 'aliceblue',
    padding: 15,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  titleLabel: {
    fontSize: 20,
    textAlign: 'center',
  },
  control: {
    flex: 1,
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
    textAlign: 'center',
  },
  selectedLabel: {
    color: '#fff',
  },
  box: {
    width: 50,
    height: 50,
  },
  box1: {
    top: 25,
    left: 25,
    backgroundColor: 'powderblue',
  },
  box2: {
    top: 50,
    left: 50,
    backgroundColor: 'skyblue',
  },
  box3: {
    top: 75,
    left: 75,
    backgroundColor: 'steelblue',
  },
});

export default App;
