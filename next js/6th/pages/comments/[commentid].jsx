  import { MdAccountCircle } from "react-icons/md";
  const Commentid = ({data}) => {
    return (
      <>
      <div className="comment bg-[#a7f1edd4] p-1 ">
            <h1 className="font-bold pt-10 p-3 rounded-2xl text-5xl text-center bg-[#4682B4] text-[#FF8C00] capitalize ">
          this is user comment
        </h1>
      <div className="card border  rounded-lg m-5 h-fit bg-[#ffe4b5d0]  shadow-lg w-72 p-2">
        <div className="head flex shadow-lg rounded-lg p-1 bg-[#f9d89f9a] items-center border-b justify-between gap-1">
            <MdAccountCircle size={40} color="#20B2AA" />
        <h1 className="truncate capitalize  font-bold text-[#00A7E1]">
          User Id {data.name}</h1> 
          </div>
          <h4 className="text-[12px] text-right text-[#db8474ce] pt-3">{data.email}</h4>
          <p className="">{data.body}</p>
          </div> </div>   </>
    )
  }

  export default Commentid;
  export async function getServerSideProps({params}) {
    let id = params.commentid  
    const api = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data = await api.json()
  

    return{
      props:{
        data
      }
    }
  }