import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }:{
  onAddItem: (newItemText: string) => void;
}) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current!.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
          setItemText(event.target.value);
        }}
        autoFocus
      />
      <Button buttonType="secondary">Add to list</Button>
    </form>
  );
}
