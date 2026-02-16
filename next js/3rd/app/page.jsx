import Link from "next/link";

export default function Home() {
  return (
<>
<h1>its a  main page </h1>
   <button className="py-2 px-5 rounded-2xl bg-pink-300 text-blue-950"><Link href="/about"> Go to About</Link></button>
</>
  );
}
