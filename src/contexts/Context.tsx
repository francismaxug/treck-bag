import { createContext, useEffect } from "react";
import { useStorage } from "../lib/useLocalStorage";
import { IItems, initialItems } from "../lib/constants";

interface AppContext {
  itemList: IItems[];
  addItem: (newItemText: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
}
export const Context = createContext<AppContext>({} as AppContext);

export function MainContext({ children }: { children: React.ReactNode }) {
  const [itemList, setItemsList] = useStorage();
  const addItem = (newItemText: string) => {
    const newItem = {
      id: Number(new Date().getTime()),
      name: newItemText,
      packed: false,
    };
    setItemsList((i: IItems[]) => [...i, newItem]);
  };
  function deleteItem(id: number) {
    const newItems = itemList.filter((item) => item.id !== id);
    setItemsList(newItems);
  }
  function toggleItem(id: number) {
    const newItems = itemList.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });
    setItemsList(newItems);
  }

  function removeAllItems() {
    setItemsList([]);
  }
  function resetToInitial() {
    setItemsList(initialItems);
  }
  function markAllAsComplete() {
    const newItems = itemList.map((item) => {
      return { ...item, packed: true };
    });

    setItemsList(newItems);
  }
  function markAllAsIncomplete() {
    const newItems = itemList.map((item) => {
      return { ...item, packed: false };
    });

    setItemsList(newItems);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(itemList));
  }, [itemList]);
  const vals = {
    itemList,
    addItem,
    deleteItem,
    toggleItem,
    removeAllItems,
    resetToInitial,
    markAllAsComplete,
    markAllAsIncomplete,
  };

  return <Context.Provider value={vals}>{children}</Context.Provider>;
}
