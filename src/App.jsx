import Header from "./Header";
import Form from "./Form";
import Nav from "./Nav";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

function App() {
  const [reqType, setReqType] = useState("all");
  const [items, setItems] = useState(
    localStorage.TodoList ? JSON.parse(localStorage.TodoList) : []
  );
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const handleFilter = () => {
      let listItems;
      switch (reqType) {
        case "all":
          listItems = [...items];
          break;
        case "completed":
          listItems = items.filter((item) => item.isCompleted === true);
          break;
        case "running":
          listItems = items.filter((item) => item.isCompleted === false);
          break;
      }

      setFilteredItems(listItems.reverse());
    };

    handleFilter();
  }, [items, reqType]);

  return (
    <>
      <Header />
      <main>
        <Form items={items} setItems={setItems} />
        <Nav items={items} reqType={reqType} setReqType={setReqType} />
        <ItemList
          items={items}
          filteredItems={filteredItems}
          setItems={setItems}
        />
      </main>
    </>
  );
}

export default App;
