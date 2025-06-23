import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/calculator';

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.background,
  },
  displayText: {
    fontSize: 48,
    fontWeight: '300',
    color: COLORS.display,
    textAlign: 'right',
  },
});

export default CalculatorDisplay;