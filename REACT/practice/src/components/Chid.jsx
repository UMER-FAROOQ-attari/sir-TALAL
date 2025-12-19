import React from 'react'
import { useContext } from 'react'
import { NameContext } from './Context'
const Chid = () => {
    const userData = useContext(NameContext )
  return (
    <div>
        Child = My name is {userData.id1.name} an my age is {userData.id2.age}
    </div>
  )
}

export default Chid