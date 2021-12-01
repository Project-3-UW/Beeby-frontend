import { authenticatedRequest } from "../../../request";

export const createItem = (item) => {
  return authenticatedRequest.post("/api/items", item);
};
