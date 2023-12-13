import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") return;

    onSubmit(newItem);
    setNewItem(""); //Clear Input After Submit
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div>
        <label htmlFor="item" id="new-item" className="mb-3 display-6">
          Add your tasks:
        </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          className="form-control"
        />
      </div>
      <button className="btn btn-success mt-2 w-100 mb-2">Add</button>
    </form>
  );
}
