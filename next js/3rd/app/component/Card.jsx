import umer from "@/public/this.png"
import Image from "next/image";
const Card = () => {
  return (
<>
<div className="cla flex flex-wrap  ">
<div className="card border-2 w-50 justify-center flex-col h-70 rounded-2xl flex items-center bg-blue-200 text-pink-600 m-5 ">
  <h1 className="text-3xl justify-self-center">This is Card</h1>  
  <div className="div w-30 h-30  border rounded-full bg-blue-100">
    <Image src="/yes.png" className="w-full h-full rounded-full"   width={100} height={100} alt="This is an img" />
    </div>      
</div>
<div className="card border-2 w-50 justify-center flex-col h-70 rounded-2xl flex items-center bg-blue-200 text-pink-600 m-5 ">
  <div className="div relative w-full h-full  border rounded-full bg-blue-100">
    <Image src={umer} quality={100} fill={true} priority={false} placeholder="blur" blurDataURL="" alt="yes"></Image>
    </div>      
</div>
</div>
</>
  )
}
export default Card;