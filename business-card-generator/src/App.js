import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // 제출 후 미리보기 표시
  };

  return (
    <div className="App">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h1>명함 생성기</h1>
          <div>
            <label>이름:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>이메일:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">명함 생성</button>
        </form>
      ) : (
        <div>
          <h2>명함 미리보기</h2>
          <p>이름: {name}</p>
          <p>이메일: {email}</p>
          <button onClick={() => setSubmitted(false)}>다시 생성</button>
        </div>
      )}
    </div>
  );
}

export default App;
