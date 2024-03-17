import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { IItems } from "../lib/constants";
import { useItemsContext } from "../lib/hooks";

interface Opt {
  label: string;
  value: string;
}
const sortingOptions: Opt[] = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { deleteItem, itemList, toggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...itemList].sort((a, b) => {
        if (sortBy === "packed") {
          return Number(b.packed) - Number(a.packed);
        }

        if (sortBy === "unpacked") {
          return Number(a.packed) - Number(b.packed);
        }

        return 0; // Add a default return value
      }),
    [itemList, sortBy]
  );

  return (
    <ul className="item-list">
      {itemList.length === 0 ? <EmptyView /> : null}

      {itemList.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option!.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({
  item,
  onDeleteItem,
  onToggleItem,
}: {
  item: IItems;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />{" "}
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
