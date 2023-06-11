import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputString, setInputString] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputString.trim() === '') {
      setError('Please enter a valid string.');
      return;
    }

    if (isNaN(inputNumber)) {
      setError('Please enter a valid number.');
      return;
    }

    setError('');

    const repeatedString = inputString.repeat(parseInt(inputNumber));
    setResult(repeatedString);
  };


  return (
    <div className="container">
      <h1>String Repeater App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label">
          String:
          <input
            type="text"
            className="form-input"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Number:
          <input
            type="text"
            className="form-input"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {error && <p className="error-msg">{error}</p>}
      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default App;
