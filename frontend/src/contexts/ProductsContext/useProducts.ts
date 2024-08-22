import { useContext } from "react";
import { Context } from ".";

export function useProducts() {
  return useContext(Context);
}