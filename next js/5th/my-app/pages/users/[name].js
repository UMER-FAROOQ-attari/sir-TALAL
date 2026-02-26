import { useRouter } from "next/router";

export default function User() {
   const rout = useRouter();
  let {name} = rout.query
   console.log(rout)
  return (
   <>
   <h1 className="text-6xl font-bold  text-center pt-20 bg-amber-300 p-2" >
  User Page 
   </h1>
   <h2>this is{name}</h2>

   </>  );
}
