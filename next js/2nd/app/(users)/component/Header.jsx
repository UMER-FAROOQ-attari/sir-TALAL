import Link from "next/link"
export default  function Header() {
  return (
   <div className="nav grid bg-black p-4 items-center grid-cols-2">
   <h1 className="text-4xl text-yellow-300">LOGO</h1>
   <ul className="flex gap-7">
    <li><Link className="text-yellow-200" href="/">HOME</Link></li>
    <li><Link className="text-yellow-200" href="/about">ABOUT</Link></li>
    <li><Link className="text-yellow-200" href="/items">ITEMS</Link></li>
    <li><Link className="text-yellow-200" href="/blog">BLOG</Link></li>
   </ul>
   </div>
)
}