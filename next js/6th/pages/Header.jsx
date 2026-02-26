import Link from "next/link"
 const Header = () => {
  return (
    <>
    <div className="header flex justify-between px-20 items-center bg-amber-300 shadow-lg p-3 mb-10">
        <div className="logo"><h1 className="text-3xl font-bold">UMER</h1></div>
        <ul className="flex gap-10">
            <li> <Link href="/"> Home</Link> </li>
            <li> <Link href="/posts"> posts</Link></li> 
            <li> <Link href="/comments"> comment</Link> 
            </li>
        </ul>
    </div>
    </>
  )
}
export  default  Header;