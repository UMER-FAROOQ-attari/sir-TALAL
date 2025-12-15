import React from 'react'
import Herobtn from './Herobtn'
const Main = () => {
    return (
        <>
            <div className="main bg-blue-400 p-30 text-center items-center flex flex-col">
                <h1 className='text-5xl font-bold text-white p-10'>THE Conversion Platform for Makreters</h1>
                <p className=' text-white text-center p-10 px-52 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolores voluptate, nostrum magni repellendus impedit non quisquam obcaecati optio cumque quo quae corrupti earum laudantium perferendis vel, minus, illo distinctio! Dicta tenetur minima labore laudantium veritatis, impedit dolore cumque mollitia quidem veniam ad at, optio explicabo, vero totam iusto!</p>
               
              <div className="btn flex gap-10"> <Herobtn a = "PERVIWE THE LANDING"  s = "PAGE BUILDER" />
               <Herobtn a = "SEE HOW UNBOUNCE"  s = "CAN HELP ME" /></div>   
            </div>
        </>
    )
}

export default Main