import React from "react";

const students = [
  {
    studentId: "S1001",
    name: "Alice Smith",
    major: "Computer Science",
    enrolled: true,
    grades: [
      { subject: "Math", score: 90 },
      { subject: "Physics", score: 85 },
    ],
  },
  {
    studentId: "S1002",
    name: "Bob Johnson",
    major: "Biology",
    enrolled: true,
    grades: [
      { subject: "Biology", score: 95 },
      { subject: "Chemistry", score: 88 },
    ],
  },
  {
    studentId: "S1003",
    name: "Charlie Brown",
    major: "History",
    enrolled: false,
    grades: [
      { subject: "History", score: 78 },
      { subject: "Art", score: 82 },
    ],
  },
];

const Task1 = () => {
  return (
    <>
    <h2 className="text-3xl bg-blue-950 p-3 m-2 rounded-2xl text-sky-200 text-center"> Task No. 1</h2>
    <div className="cards flex flex-wrap gap-4">
      {students.map((student) => (
        <div
          key={student.studentId}
          className="card border rounded-lg m-2  bg-sky-200  text-sky-950 p-4 w-72"
        >
          <h1 className="flex justify-between text-lg font-semibold">
            Student ID:
            <span>{student.studentId}</span>
          </h1>

          <h2 className="flex justify-between text-lg">
            Name:
            <span>{student.name}</span>
          </h2>

          <h2 className="flex justify-between text-lg">
            Major:
            <span>{student.major}</span>
          </h2>

          <h2 className="flex justify-between text-lg">
            Enrolled:
            <span>{student.enrolled ? "Yes" : "No"}</span>
          </h2>

          <div className="mt-2">
            <h3 className="font-semibold">Grades:</h3>
            {student.grades.map((grade, index) => (
              <p key={index} className="text-sm">
                {grade.subject}: {grade.score}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Task1;
