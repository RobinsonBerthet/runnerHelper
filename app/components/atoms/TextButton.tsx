import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

type TextButtonProps = {
  label: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  key?: string;
};

export default function TextButton({
  label,
  containerStyle,
  textStyle,
  onPress,
  key,
}: TextButtonProps) {
  return (
    <TouchableOpacity
      key={key}
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={[styles.txtStyle, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(60, 151, 118)',
    padding: 10,
    borderRadius: 15,
  },
  txtStyle: {
    fontSize: 16,
    color: 'rgb(255, 255, 255)',
  },
});
