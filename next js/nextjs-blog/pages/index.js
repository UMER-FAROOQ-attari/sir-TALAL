import Link from "next/link";
479828
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <Link href="/about">
        Go to About
      </Link>
      <br />
      <br />
      <br />

      <Link href="/posts/first-post">
        Go to First Post
      </Link>
      <br />
      <br />
      <br />

      <Link href="/posts/first-post">
        Go to First Post
      </Link>
    </>
  );
}
