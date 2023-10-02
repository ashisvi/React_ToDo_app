import { useState } from "react";

const Form = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const today = new Date();
    const todayDate = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
    const myNewItem = { id, item, isCompleted: false, todayDate };
    setItems([...items, myNewItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      alert("Input cannot be blank.");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form className="inputForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="addTask">Add task</label>
      <input
        type="text"
        id="addTask"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Form;
