const LineItem = ({ item, handleDelete, handleCheck }) => {
  return (
    <li className="item">
      <label htmlFor="">{item.item}</label>
      <span className="datetime">{item.todayDate}</span>
      <input
        type="checkbox"
        id="checkTodo"
        checked={item.isCompleted}
        onChange={() => handleCheck(item.id)}
      />
      <button className="deleteButton" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default LineItem;
