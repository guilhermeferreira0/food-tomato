import { useContext } from "react";
import { Context } from "./AuthContext";

export function useAuth() {
  return useContext(Context);
}