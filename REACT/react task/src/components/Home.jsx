import React from 'react'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'

import HomeCard from './HomeCard'

const Home = () => {
  return (
  <>
  <div className="home bg-sky-100 flex flex-wrap gap-4 p-5 justify-around">
  <HomeCard img={pic1} link="/task1"  title="Task 1 (StudentCard)" text="Create a reusable card component to display different student data using Props and the .map() function." />
  <HomeCard img={pic2} link="/task2" title="Task 2 (Emoji Counter)" text="Build a simple counter using useState to increase, decrease, or reset numbers with emoji display." />
  <HomeCard img={pic3} link="/task3" title="Task 3 (Signup Form)" text="Design a form to capture user input (Name, Email, Password) using State and show it after clicking submit." />
  <HomeCard img={pic4} link="/task4" title="Task 4 (Todo App)" text="Create a list where you can Add, Delete, and Mark tasks as completed to manage daily activities." />
</div>
  </>
  )
}

export default Home