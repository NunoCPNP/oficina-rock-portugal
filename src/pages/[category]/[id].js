import { useRouter } from "next/router";

const Id = () => {
  const router = useRouter();

  console.log("ROUTER: ", router);

  return <div>Hi from category/id</div>;
};

export default Id;