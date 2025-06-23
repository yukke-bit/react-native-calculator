import { useState } from 'react';
import { CalculatorState, Operation } from '../types/calculator';
import { calculate, formatDisplay } from '../utils/calculator';

const initialState: CalculatorState = {
  display: '0',
  previousValue: null,
  operation: null,
  waitingForOperand: false,
};

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>(initialState);

  const inputNumber = (num: string) => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: num,
        waitingForOperand: false,
      });
    } else {
      setState({
        ...state,
        display: state.display === '0' ? num : state.display + num,
      });
    }
  };

  const inputDecimal = () => {
    if (state.waitingForOperand) {
      setState({
        ...state,
        display: '0.',
        waitingForOperand: false,
      });
    } else if (state.display.indexOf('.') === -1) {
      setState({
        ...state,
        display: state.display + '.',
      });
    }
  };

  const clear = () => {
    setState(initialState);
  };

  const performOperation = (nextOperation: Operation) => {
    const inputValue = parseFloat(state.display);

    if (state.previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true,
      });
    } else if (state.operation && !state.waitingForOperand) {
      const currentValue = state.previousValue || 0;
      const result = calculate(currentValue, inputValue, state.operation);

      setState({
        ...state,
        display: String(result),
        previousValue: result,
        operation: nextOperation,
        waitingForOperand: true,
      });
    } else {
      setState({
        ...state,
        operation: nextOperation,
        waitingForOperand: true,
      });
    }
  };

  const calculate_ = () => {
    if (state.operation && state.previousValue !== null && !state.waitingForOperand) {
      const inputValue = parseFloat(state.display);
      const result = calculate(state.previousValue, inputValue, state.operation);

      setState({
        ...state,
        display: String(result),
        previousValue: null,
        operation: null,
        waitingForOperand: true,
      });
    }
  };

  return {
    display: formatDisplay(state.display),
    inputNumber,
    inputDecimal,
    clear,
    performOperation,
    calculate: calculate_,
  };
};