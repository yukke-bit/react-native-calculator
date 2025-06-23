export const CALCULATOR_BUTTONS = [
  { title: 'C', type: 'clear' as const },
  { title: '±', type: 'operation' as const },
  { title: '%', type: 'operation' as const },
  { title: '÷', type: 'operation' as const, operation: '/' as const },
  
  { title: '7', type: 'number' as const },
  { title: '8', type: 'number' as const },
  { title: '9', type: 'number' as const },
  { title: '×', type: 'operation' as const, operation: '*' as const },
  
  { title: '4', type: 'number' as const },
  { title: '5', type: 'number' as const },
  { title: '6', type: 'number' as const },
  { title: '-', type: 'operation' as const, operation: '-' as const },
  
  { title: '1', type: 'number' as const },
  { title: '2', type: 'number' as const },
  { title: '3', type: 'number' as const },
  { title: '+', type: 'operation' as const, operation: '+' as const },
  
  { title: '0', type: 'number' as const },
  { title: '.', type: 'number' as const },
  { title: '=', type: 'equals' as const },
];

export const COLORS = {
  background: '#000000',
  display: '#ffffff',
  numberButton: '#333333',
  operationButton: '#ff9500',
  clearButton: '#a6a6a6',
  buttonText: '#ffffff',
  operationText: '#ffffff',
  clearText: '#000000',
};