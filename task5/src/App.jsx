import React, { useState } from 'react';


const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = (operation) => {
        let res;
        switch (operation) {
            case 'add':
                res = parseFloat(num1) + parseFloat(num2);
                break;
            case 'subtract':
                res = parseFloat(num1) - parseFloat(num2);
                break;
            case 'multiply':
                res = parseFloat(num1) * parseFloat(num2);
                break;
            case 'divide':
                res = parseFloat(num2) !== 0 ? parseFloat(num1) / parseFloat(num2) : "Cannot divide by zero!";
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Simple Calculator</h1>
            <div className="input-section">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    className="calculator-input"
                    placeholder="First Number"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    className="calculator-input"
                    placeholder="Second Number"
                />
            </div>
            <div className="button-section">
                <button className="calculator-button" onClick={() => calculate('add')}>+</button>
                <button className="calculator-button" onClick={() => calculate('subtract')}>-</button>
                <button className="calculator-button" onClick={() => calculate('multiply')}>*</button>
                <button className="calculator-button" onClick={() => calculate('divide')}>/</button>
            </div>
            <div className="result-section">
                <h3>Result: {result !== null ? result : 'No calculation yet'}</h3>
            </div>
        </div>
    );
};

export default Calculator;
