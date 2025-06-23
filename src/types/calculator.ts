export type Operation = '+' | '-' | '*' | '/' | '=';

export type ButtonType = 'number' | 'operation' | 'clear' | 'equals';

export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: Operation | null;
  waitingForOperand: boolean;
}

export interface ButtonProps {
  onPress: () => void;
  title: string;
  type: ButtonType;
  style?: any;
}