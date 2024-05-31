import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const StudentContext = createContext();

// Create a provider component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    // Load students from localStorage if available
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (name, score) => {
    const newStudent = {
      name,
      score,
      id: Date.now(),
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
