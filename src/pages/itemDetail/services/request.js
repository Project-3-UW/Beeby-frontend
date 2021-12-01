import { unAuthenticatedRequest } from "../../../request";

export const getLatestItems = async () => {
  return unAuthenticatedRequest.get("http://localhost:3001/api/items/id");
};