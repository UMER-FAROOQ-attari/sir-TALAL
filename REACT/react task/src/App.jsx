import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Task1 from './components/Tasks/Task1';
import Task2 from './components/Tasks/Task2';
import Task3 from './components/Tasks/Task3';
import Task4 from './components/Tasks/Task4';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />  } />
        <Route path="/about" element={<About />  } />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3/*" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
   <Footer />
    </Router>
  );
}
export default App