import './App.css'
import { Card } from './components/Card'

function App() {
  return (
    < >
      

      <table className='bg-pink-800 '>
        <label htmlFor="userName" className='text-yellow-400 text-3xl font-bold '>NAME</label>
        <input type="text" id='userName' className='border-2 shadow-lg ml-5  rounded-2xl p-5 m-5 text-2xl font-extrabold capitalize bg-yellow-400 text-black '  />
      </table>
      <div className="flex flex-wrap gap-5 align-items-center justify-center">
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/1.jpg"  />
      <Card name = "ALI" src = "https://randomuser.me/api/portraits/men/2.jpg"  />
      <Card name = "ahmed" src = "https://randomuser.me/api/portraits/men/3.jpg"  />
      <Card name = "BAKER" src = "https://randomuser.me/api/portraits/men/4.jpg"  />
      <Card name = "JOHAN" src = "https://randomuser.me/api/portraits/men/5.jpg"  />
      <Card name = "ZAIN" src = "https://randomuser.me/api/portraits/men/6.jpg"  />
      <Card name = "MADNI" src = "https://randomuser.me/api/portraits/men/7.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/8.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/9.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/10.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/11.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/12.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/13.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/14.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/15.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/16.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/17.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/18.jpg"  />
      <Card name = "UMER" src = "https://randomuser.me/api/portraits/men/19.jpg"  />
    
    </div>
    </>
  )
}

export default App
