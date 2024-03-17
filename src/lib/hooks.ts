import { useContext } from "react";
import { Context } from "../contexts/Context"; 

export function useItemsContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    );
  }

  return context;
}
