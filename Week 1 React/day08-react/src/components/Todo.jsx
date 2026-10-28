export default function Todo({ todo, setStatusItem, deleteItem }) {
  return (
    <>
      <p>
        <input
          type="checkbox"
          name="myCheckbox"
          checked={todo.completed}
          onChange={(e) => setStatusItem(todo, e.target.checked)}
        />
        <span className={todo.completed ? "todo-app-input-text" : ""}>
          {todo.text}
        </span>
        <button type="button" onClick={()=> deleteItem(todo?.id)}>Delete</button>
      </p>
    </>
  );
}
