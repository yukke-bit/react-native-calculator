import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../types/calculator';
import { COLORS } from '../constants/calculator';

const CalculatorButton: React.FC<ButtonProps> = ({ onPress, title, type, style }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'operation':
        return [styles.button, styles.operationButton];
      case 'clear':
        return [styles.button, styles.clearButton];
      case 'equals':
        return [styles.button, styles.operationButton];
      default:
        return [styles.button, styles.numberButton];
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'clear':
        return [styles.buttonText, styles.clearText];
      case 'operation':
        return [styles.buttonText, styles.operationText];
      default:
        return [styles.buttonText];
    }
  };

  return (
    <TouchableOpacity
      style={[...getButtonStyle(), style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    margin: 5,
    width: 70,
    height: 70,
  },
  numberButton: {
    backgroundColor: COLORS.numberButton,
  },
  operationButton: {
    backgroundColor: COLORS.operationButton,
  },
  clearButton: {
    backgroundColor: COLORS.clearButton,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.buttonText,
  },
  operationText: {
    color: COLORS.operationText,
  },
  clearText: {
    color: COLORS.clearText,
  },
});

export default CalculatorButton;