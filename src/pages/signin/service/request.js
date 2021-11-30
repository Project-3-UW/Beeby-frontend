import { unAuthenticatedRequest } from "../../../request";

export const signIn = (email, password, token) => {
  return unAuthenticatedRequest.post("/api/users/login", {
    email,
    password,
  });
};
