import React from "react";
import Cards from "./Cards";
import axios from 'axios'
import { useState ,useEffect } from "react";
const Main = () => {
    const [users, setUser] = useState([]);
 useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
        <div className="main flex flex-wrap gap-5 ml-10">
   {users.map((user)=>(
    <div key={user.id}>
      <Cards img={user.image} title={users.title} price={user.price} />      
    </div>
  
  ))}
    
      </div>
    </>
  );
};

export default Main;
