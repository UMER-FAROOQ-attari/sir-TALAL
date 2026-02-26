import { useRouter } from "next/router";

export default function User(props) {
  const router = useRouter();
  const {username} = router.query;
  console.log(username);
  return (
    <>
      <h1 className="font-bold">This is laptop {username}</h1>
    </>
  );
}
