import React from 'react'
import { Grandchaild } from './Grandchaild'
const Chaild = (props) => {
  return (
    <>
    
    <div>{props.masg}</div>
    <Grandchaild masg = "hy am ??" />
    </>
  )
}
export default Chaild;

export const Text = () => {
  return (
    <>
    <h1>Hello world</h1>
    </>
  )
}