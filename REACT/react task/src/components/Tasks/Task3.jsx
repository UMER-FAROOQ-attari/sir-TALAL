import SignUp from './task 3/SignUp'
import Login from './task 3/Login'
import { Routes, Route } from 'react-router-dom';

const Task3 = () => {
  return (
    <div className="flex flex-wrap bg-amber-200 justify-center p-5">
      <Routes>
        <Route index element={<SignUp />} /> 
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Task3
