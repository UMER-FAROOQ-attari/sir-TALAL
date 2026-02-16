import Link from "next/link";
export default function About() {
  return (
    <div className="bg-amber-50 h-[100vh]">
      <h1 className="text-4xl text-center p-4 ">About</h1>
      <p className="text-left w-200 justify-self-center">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati
        mollitia beatae recusandae repellat. Numquam suscipit unde excepturi
        accusantium repellat reprehenderit dolorem nemo facilis ipsa esse, error
        itaque quidem voluptatum . Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quia quam nemo ut a, illum impedit asperiores fuga
        alias voluptate, nostrum saepe et porro consequuntur dolorum excepturi
        esse. Non, eaque odit?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Sunt, fugiat, aliquam aut nulla quam quia eius, sit asperiores ut
        ex earum! Fugit perspiciatis placeat ipsa veniam quisquam iusto. Quos,
        aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        enim nam architecto molestiae at non? Distinctio consectetur explicabo
        voluptatum. Facere voluptas assumenda dignissimos vero quidem ad
        veritatis totam repudiandae libero!
      </p>
      <button className="p-2 px-5 rounded-3xl bg-black text-amber-200"><Link href='/' >Back to home</Link></button>
    </div>
  );
}
