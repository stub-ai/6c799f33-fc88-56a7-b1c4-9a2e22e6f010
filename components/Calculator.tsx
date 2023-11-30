import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleCalculate = (operation: string) => {
    switch (operation) {
      case '+':
        setResult(firstNumber + secondNumber);
        break;
      case '-':
        setResult(firstNumber - secondNumber);
        break;
      case '*':
        setResult(firstNumber * secondNumber);
        break;
      case '/':
        if (secondNumber !== 0) {
          setResult(firstNumber / secondNumber);
        } else {
          alert('Cannot divide by zero');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
        className="border-2 border-gray-300 rounded-md p-2"
      />
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            onClick={() => setFirstNumber(num)}
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex space-x-4">
        <button onClick={() => handleCalculate('+')} className="bg-blue-500 text-white rounded-md px-4 py-2">+</button>
        <button onClick={() => handleCalculate('-')} className="bg-blue-500 text-white rounded-md px-4 py-2">-</button>
        <button onClick={() => handleCalculate('*')} className="bg-blue-500 text-white rounded-md px-4 py-2">*</button>
        <button onClick={() => handleCalculate('/')} className="bg-blue-500 text-white rounded-md px-4 py-2">/</button>
      </div>
      <div className="text-2xl">Result: {result}</div>
    </div>
  );
};

export default Calculator;