import { useState } from "react";
import { IItems, initialItems } from "./constants";

export function useStorage() {
  const [itemList, setItemsList] = useState(function () {
    const local = JSON.parse(localStorage.getItem("items") || "") as IItems[];
    return local || initialItems;
  });

  return [itemList, setItemsList] as const;
}
