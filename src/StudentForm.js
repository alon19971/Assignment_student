import React, { useState, useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      addStudent(name, parseInt(score, 10));
      setName('');
      setScore('');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student Name"
          required
        />
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Score"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
