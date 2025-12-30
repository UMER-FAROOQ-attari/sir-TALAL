import { useState } from "react"

const App = () => {
  const [user, setUser] = useState({name:"umer",age:19});
  function add(){
    setUser(pre=>({...pre,age:20}))
  }
  return (
   <>
    <h1>He is {user.name} and age is {user.age}</h1>   
    <button onClick={add}> Add</button>  
   </>



















    // // 1. Parent: flex + overflow-x-auto
    // <div className="flex overflow-x-auto gap-4 p-5 bg-gray-100">
      
    //   {/* 2. Children: Fixed Width + shrink-0 */}
    //   <div className="w-40 h-40 bg-red-500 shrink-0 rounded-lg">Box 1</div>
    //   <div className="w-40 h-40 bg-blue-500 shrink-0 rounded-lg">Box 2</div>
    //   <div className="w-40 h-40 bg-green-500 shrink-0 rounded-lg">Box 3</div>
    //   <div className="w-40 h-40 bg-yellow-500 shrink-0 rounded-lg">Box 4</div>
    //   <div className="w-40 h-40 bg-purple-500 shrink-0 rounded-lg">Box 5</div>
    //   <div className="w-40 h-40 bg-pink-500 shrink-0 rounded-lg">Box 6</div>
    //   <div className="w-40 h-40 bg-red-500 shrink-0 rounded-lg">Box 1</div>
    //   <div className="w-40 h-40 bg-blue-500 shrink-0 rounded-lg">Box 2</div>
    //   <div className="w-40 h-40 bg-green-500 shrink-0 rounded-lg">Box 3</div>
    //   <div className="w-40 h-40 bg-yellow-500 shrink-0 rounded-lg">Box 4</div>
    //   <div className="w-40 h-40 bg-purple-500 shrink-0 rounded-lg">Box 5</div>
    //   <div className="w-40 h-40 bg-pink-500 shrink-0 rounded-lg">Box 6</div>
    // </div>
  )
}

export default App