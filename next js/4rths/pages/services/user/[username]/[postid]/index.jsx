import { useRouter } from "next/router";

export default function Post(props) {
  const router = useRouter();
 const { username, postid } = router.query;
  console.log(username);
  return (
    <>
      <h1 className="font-bold">This is laptop owner name :{username} and this post  {postid}</h1>
    </>
  );
}
