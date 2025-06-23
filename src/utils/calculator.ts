import { Operation } from '../types/calculator';

export const calculate = (
  firstOperand: number,
  secondOperand: number,
  operation: Operation
): number => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return secondOperand !== 0 ? firstOperand / secondOperand : 0;
    default:
      return secondOperand;
  }
};

export const formatDisplay = (value: string): string => {
  // Remove leading zeros except for decimal numbers
  if (value === '0' || value === '') return '0';
  
  // Handle decimal point
  if (value.includes('.')) {
    const parts = value.split('.');
    return parts[0].replace(/^0+/, '') || '0' + '.' + parts[1];
  }
  
  return value.replace(/^0+/, '') || '0';
};

export const isOperator = (value: string): boolean => {
  return ['+', '-', '*', '/'].includes(value);
};