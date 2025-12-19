import React from 'react'
import Chid from './Chid'
import { useContext } from 'react'
import { NameContext } from './Context'

const Parent = () => {
const data = useContext(NameContext)
    return (
    <div>parent
        My name is {data.id2.name} and age is {data.id2.age}
        <Chid />
    </div>
  )
}

export default Parent