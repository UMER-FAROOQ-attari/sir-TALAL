  import { MdAccountCircle } from "react-icons/md";
const Comments = ({ data }) => {
  return (
    <>
      <h1 className="font-bold pt-10 p-3 rounded-2xl text-5xl text-center bg-[#4682B4] text-[#FF8C00] capitalize ">
        this is users comments
      </h1 >
      <ul className="flex flex-wrap justify-center">
        {data.map((itm) => (
          <li key={itm.id}>
<div className="card border  rounded-lg m-5 h-60 bg-[#ffe4b5d0]  shadow-lg w-72 p-2">
        <div className="head flex shadow-lg rounded-lg p-1 bg-[#f9d89f9a] items-center border-b justify-between gap-1">
            <MdAccountCircle size={40} color="#20B2AA" />
        <h1 className="truncate capitalize  font-bold text-[#00A7E1]">
          User Id {itm.name}</h1> 
          </div>
          <h4 className="text-[12px] text-right text-[#db8474ce] pt-3">{itm.email}</h4>
          <p className="line-clamp-6">{itm.body}</p>
          </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;

export async function getServerSideProps() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await api.json();
  return {
    props: {
      data: data,
    },
  };
}
