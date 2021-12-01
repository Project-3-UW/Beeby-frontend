import { unAuthenticatedRequest } from "../../../request";

export const getLatestItems = async () => {
  return unAuthenticatedRequest.get("/api/items");
};
