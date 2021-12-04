import { unAuthenticatedRequest } from "../../../request";


const URL_PREFIX = "http://localhost:3001"
// delploy
// const URL_PREFIX = "https://beeby-backend.herokuapp.com"

export const getLatestItems = async () => {
  return unAuthenticatedRequest.get(`${URL_PREFIX}/api/items/id`);
};