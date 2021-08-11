import { useContext } from "react";

import CollectionContext from "@/context/CollectionContext";

const useCollection = () => useContext(CollectionContext);

export default useCollection;
