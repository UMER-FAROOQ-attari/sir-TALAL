import Image from "next/image";
export default function Home({ product }) {
  return (
    <>
    
      <h1 className="text-blue-200 bg-gray-700 pt-20  text-5xl text-center p-4  text-shadow-blue-500/100 text-shadow-lg">
        This is proudect page
      </h1>
      <h2>
        <ul className="flex flex-wrap gap-6 p-5 justify-center">
          {product.map((item) => (
            <li key={item.id}>
              <div className="card border p-4 rounded-2xl w-96 h-[28rem] bg-blue-200 text-blue-900 flex flex-col justify-between shadow-lg">
                <h1 className="text-xl font-bold truncate">{item.title}</h1>
                <div className="flex justify-center my-2">
                  <Image
                    className="rounded-lg mix-blend-multiply filter drop-shadow-[0_10px_8px_rgba(0,0,0,0.7)]"
                    src={item.image}
                    width={150}
                    height={150}
                    alt={item.title}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h2 className="text-lg font-semibold">${item.price}</h2>
                <p className="text-sm text-blue-800 line-clamp-3">
                  {item.description}
                </p>
                <span className="text-sm font-medium text-blue-900 mt-2">
                  {item.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </h2>
    </>
  );
}
export async function getStaticProps() {
  const api = await fetch("https://fakestoreapi.com/products");
  const data = await api.json();
  return {
    props: {
      product: data,
    },
  };
}
