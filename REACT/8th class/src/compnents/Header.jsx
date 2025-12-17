import React from 'react'
import { MdLanguage } from "react-icons/md";

import Navbutton from './Navbutton'
const Header = () => {
  return (
<>
<div className="header bg-blue-900 flex gap-7 justify-between p-4 items-center	">
<div className="logo  text-white text-4xl font-bold">logo</div>
<div className="nav flex list-none gap-7">
        <li className='text-2xl font-thin text-white'>Product</li>
        <li className='text-2xl font-thin text-white'>CUSTMERS</li>
        <li className='text-2xl font-thin text-white'>PRICING</li>
        <li className='text-2xl font-thin text-white'>FOR AGENCES</li>
        <li className='text-2xl font-thin text-white'>FOR PPC</li>
        <li className='text-2xl font-thin text-white'>LERAR</li>
</div> 
<div className="form flex list-none gap-7 items-center	">
          <li className='text-2xl font-thin text-white'>login</li>
          <Navbutton text = "PREVIEW THE BUILDER " />
        <li className='text-2xl font-thin text-white items-center flex gap-1'><MdLanguage /> EN 
</li>

</div>
</div>


</>  


)
}

export default Header