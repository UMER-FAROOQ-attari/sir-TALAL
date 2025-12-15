import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";


export const Footer = () => {
  return (
    <>
    <div className="footer bg-black text-white p-10 flex flex-col items-center gap-10">
    <div className="list1st flex gap-10  ">
    <FaFacebook />
<FaSquareInstagram />
<FaTwitterSquare />
<BiSolidContact />
<FaYoutube />
</div>
<div className="list flex gap-7 ">
  <li className='text-2xl list-none'>Product</li>
  <li className='text-2xl list-none'>CUSTMERS</li>
  <li className='text-2xl list-none'>PRICING</li>
  <li className='text-2xl list-none'>FOR AGENCES</li>
  <li className='text-2xl list-none'>FOR PPC</li>
  <li className='text-2xl list-none'>LERAR</li>

</div>
<p>Copyright © 2025 All rights reserved - UMER</p>
</div>
    </>
  )
}
