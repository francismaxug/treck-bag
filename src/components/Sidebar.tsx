import { useItemsContext } from "../lib/hooks";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar() {
  const {
    addItem,
    markAllAsComplete,
    markAllAsIncomplete,
    resetToInitial,
    removeAllItems,
  } = useItemsContext();

  console.log("Sidebar rendering...");
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup
        markAllAsComplete={markAllAsComplete}
        markAllAsIncomplete={markAllAsIncomplete}
        resetToInitial={resetToInitial}
        removeAllItems={removeAllItems}
      />
    </div>
  );
}
