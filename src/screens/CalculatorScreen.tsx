import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorButton from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import { CALCULATOR_BUTTONS, COLORS } from '../constants/calculator';

const CalculatorScreen: React.FC = () => {
  const { display, inputNumber, inputDecimal, clear, performOperation, calculate } = useCalculator();

  const handleButtonPress = (button: typeof CALCULATOR_BUTTONS[0]) => {
    switch (button.type) {
      case 'number':
        if (button.title === '.') {
          inputDecimal();
        } else {
          inputNumber(button.title);
        }
        break;
      case 'operation':
        if (button.operation) {
          performOperation(button.operation);
        }
        break;
      case 'clear':
        clear();
        break;
      case 'equals':
        calculate();
        break;
    }
  };

  const renderButton = (button: typeof CALCULATOR_BUTTONS[0], index: number) => {
    let style = {};
    
    // Special styling for zero button (wider)
    if (button.title === '0') {
      style = { width: 150 };
    }

    return (
      <CalculatorButton
        key={index}
        title={button.title}
        type={button.type}
        onPress={() => handleButtonPress(button)}
        style={style}
      />
    );
  };

  const renderButtonRows = () => {
    const rows = [];
    for (let i = 0; i < CALCULATOR_BUTTONS.length; i += 4) {
      const isLastRow = i >= CALCULATOR_BUTTONS.length - 3;
      if (isLastRow) {
        // Last row has special layout for 0 button
        rows.push(
          <View key={i} style={styles.buttonRow}>
            {renderButton(CALCULATOR_BUTTONS[i], i)}
            {renderButton(CALCULATOR_BUTTONS[i + 1], i + 1)}
            {renderButton(CALCULATOR_BUTTONS[i + 2], i + 2)}
          </View>
        );
      } else {
        rows.push(
          <View key={i} style={styles.buttonRow}>
            {CALCULATOR_BUTTONS.slice(i, i + 4).map((button, index) =>
              renderButton(button, i + index)
            )}
          </View>
        );
      }
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <CalculatorDisplay value={display} />
      <View style={styles.buttonsContainer}>
        {renderButtonRows()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  buttonsContainer: {
    flex: 2,
    paddingBottom: 20,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default CalculatorScreen;