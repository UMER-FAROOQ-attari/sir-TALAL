import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Task1 from './components/Tasks/Task1';
import Task2 from './components/Tasks/Task2';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome Home, Umar Farooq!</h1>} />
        <Route path="/task1" element={<Task1 />  } />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </Router>
  );
}
export default App