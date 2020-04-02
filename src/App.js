import React from 'react';
import './App.css';
import SignUp from './Components/SignUp'

function App() {
  return (
    <div className="App">
        <h1>Welcome to Recipe Collector</h1>
        <SignUp />
        {/* <img id='bookImage' src='https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='books'/> */}
    </div>
  );
}

export default App;
