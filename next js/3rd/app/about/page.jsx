import Link from "next/link";
import Card from "../component/Card";

export default function About (){
  return (
    <>
    <div className="flex cards">
 <Card />
 <Card />
 <Card /></div>
   <button className="py-2 px-5 rounded-2xl bg-pink-300 text-blue-950"><Link href="/about"> Back to Home</Link></button>

    </>
  )
}
