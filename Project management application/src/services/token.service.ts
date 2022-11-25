import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants";

export const signToken = (id: string, name: string) => {
  return jwt.sign({ id, name }, SECRET_KEY, { expiresIn: "720m" });
};

export const checkToken = (token: string) => {
  try {
    jwt.verify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};
