import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { StudentProvider } from './StudentContext';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="App">
          <nav>
            <Link to="/form">Student Form</Link>
            <Link to="/list">Student List</Link>
          </nav>
          <header className="App-header">
            <Routes>
              <Route path="/form" element={<StudentForm />} />
              <Route path="/list" element={<StudentList />} />
              <Route path="/" element={<div>Welcome to the Student App</div>} />
            </Routes>
          </header>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
