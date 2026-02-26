export default function Productid({data}) {
  return <>
  <h1></h1>
  </>;
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const api = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await api.json();
  return {
    props: { data : data },
  };
}
export async function getStaticPaths() {
  const api = await fetch("https://fakestoreapi.com/products");
  const data = await api.json();
  const paths = data.map((items) => {
    return {
      params: { id: items.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
