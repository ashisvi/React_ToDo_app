import LineItem from "./LineItem";

const ItemList = ({ items, setItems, filteredItems }) => {
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setItems(listItems);
  };

  return (
    <ul className="itemList">
      {filteredItems.map((item) => {
        return (
          <LineItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
