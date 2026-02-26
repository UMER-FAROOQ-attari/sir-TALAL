import { MdAccountCircle } from "react-icons/md";
export default function Page({ data }) {
     console.log("Params:", data);

  return (
    <>
      <h1 className="font-bold pt-20 p-3 text-5xl text-center bg-blue-900 text-orange-400 capitalize ">
        this is user post
      </h1>
    <ul>
      <li
        key={data.id}
        className="border p-3 m-5 w-72 h-fit bg-gray-200 rounded-2xl shadow-lg "
      >
        <h1 className="flex items-center font-bold text-[#00A7E1]">
          <MdAccountCircle size={40} color="#00A7E1" />
          User Id {data.userId}
        </h1>

        <h2 className="font-bold  text-blue-900 mb-3">{data.title}</h2>

        <p className=" text-[#a35117]">{data.body}</p>
      </li>
      </ul>
    </>
  );
}
export async function getStaticPaths() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await api.json();
  const paths = data.map((itm) => {
    return { params: { postid: itm.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const api = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`,
  );
  const data = await api.json();
  return {
    props: {
      data,
    },
      revalidate: 10
  };
}
