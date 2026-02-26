import { MdAccountCircle } from "react-icons/md";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1 className="font-bold pt-20 p-3 text-5xl text-center bg-[#00A7E1] text-[#FFA630] capitalize">
        This is Post Page
      </h1>

      <ul className="flex flex-wrap gap-5 p-5 bg-[#FFA630] ">
        {data.map((itm) => {
          return (
            <li
              key={itm.id}
              className="border p-3 w-72 h-60 bg-gray-200 rounded-2xl shadow-lg  "
            >
              <h1 className="flex items-center font-bold text-[#00A7E1]">
                <MdAccountCircle size={40} color="#00A7E1" />
                User Id {itm.userId}
              </h1>

              <h2 className="font-bold truncate text-blue-900 mb-3">
                {itm.title}
              </h2>

              <p className="line-clamp-6 text-[#a35117]">{itm.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export async function getStaticProps() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await api.json();
  return {
    props: {
      data,
    },
  };
}
