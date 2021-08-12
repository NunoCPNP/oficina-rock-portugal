import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();

  console.log("ROUTER: ", router);

  return <div>Hi from category</div>
}

export default Category