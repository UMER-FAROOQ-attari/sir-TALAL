import React from 'react';

// Child Component
const StudentCard = ({ name, rollNo, batch, language }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
      <div className="text-gray-600 space-y-1">
        <p><span className="font-semibold text-gray-800">Roll No:</span> {rollNo}</p>
        <p><span className="font-semibold text-gray-800">Batch:</span> {batch}</p>
        <p><span className="font-semibold text-gray-800">Fav Language:</span> 
          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{language}</span>
        </p>
      </div>
    </div>
  );
};

// Parent Component
const Task1 = () => {
  const students = [
    { id: 1, name: "Umer Farooq", rollNo: "101", batch: "Batch 4", language: "JavaScript" },
    { id: 2, name: "Abdullah", rollNo: "102", batch: "Batch 4", language: "Python" },
    { id: 3, name: "Ali", rollNo: "103", batch: "Batch 5", language: "C++" },
  ];

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Task 1: Student Cards 🎓</h2>
      {/* Grid Layout for Responsive Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {students.map((student) => (
          <StudentCard 
            key={student.id}
            name={student.name}
            rollNo={student.rollNo}
            batch={student.batch}
            language={student.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Task1;