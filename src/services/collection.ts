import { http } from "../_mocks_/http";

export const getCollection = () => {
  return http.get("/collection");
};

export const getCollectionItem = (id: any) => {
  return http.get(`/collection/${id}`);
};
