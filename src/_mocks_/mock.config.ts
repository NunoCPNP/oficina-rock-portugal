import data from "./collection.json";
import MockAdapter from "axios-mock-adapter";

let collection = data.collection;

export const isMockEnabled = () => {
  return process.env.NEXT_PUBLIC_MOCK_ENABLED === "true";
};

export const initializeAxiosMockAdapter = (instance: any) => {
  const mock = new MockAdapter(instance);
  mock.onGet("/collection").reply(() => getCollection());
  mock.onGet(/\/collection\/\d+/).reply((config) => getCollectionItem(config));
};

export const getCollection = () => {
  return [200, collection];
};

export const getCollectionItem = (config: any) => {
  const id = extractIdPathParamFromUrl(config);
  const item = collection.find((c) => c.id === id);
  return [200, item];
};

const extractIdPathParamFromUrl = (config: any) => {
  return config.url.split("/").pop();
};
