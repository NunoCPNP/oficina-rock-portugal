import { createContext, useState } from "react";

const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const [collection, setCollection] = useState(null);

  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {children}
    </CollectionContext.Provider>
  );
}

export const CollectionConsumer = CollectionContext.Consumer;

export default CollectionContext;
