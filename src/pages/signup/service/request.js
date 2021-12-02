import { unAuthenticatedRequest } from "../../../request";

export const signUp = async (
  firstName,
  lastName,
  email,
  password,
  latitude,
  longitude
) => {
  return unAuthenticatedRequest.post("/api/users/signup", {
    firstName,
    lastName,
    email,
    password,
    latitude,
    longitude,
  });
};
