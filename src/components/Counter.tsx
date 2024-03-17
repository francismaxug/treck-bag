import { useItemsContext } from "../lib/hooks";

export default function Counter() {
  const { itemList } = useItemsContext();
  const numberOfItemsPacked = itemList.filter((item) => item.packed).length;
  const totalNumberOfItems = itemList.length;
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
