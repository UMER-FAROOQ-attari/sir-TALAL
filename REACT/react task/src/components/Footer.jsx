import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
       <div className="tasks flex justify-center m-3 gap-3">
        <Link to="/task1">Task 1</Link>
        <Link to="/task2">Task 2</Link>
        <Link to="/task3">Task 3</Link>
        <Link to="/task4">Task 4</Link>
       </div>
        <p className="text-sm">
          © {new Date().getFullYear()} - <b>UMER FAROOQ</b> |  React tasks
        </p>
      </div>
    </footer>
  );
};

export default Footer;