import { createContext  } from "react";
const NameContext = createContext();
const NameProvider = ({children})=>{
    const id1 = {
        name :"Umer",
        age: 18
    }
    const id2 = {
        name :"Mahnoor",
        age: 18
    }
    
    return<NameContext.Provider value={{id1 , id2}} >{children}</NameContext.Provider>
}
export {NameContext , NameProvider}