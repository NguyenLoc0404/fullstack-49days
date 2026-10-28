import { useState } from "react";
import Todo from "./components/Todo";
export default function TodoApp() {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const [content, setContent] = useState("");
  function renderTodos() {
    return todos.map((todo) => (
      <Todo
        todo={todo}
        setStatusItem={setStatusItem}
        deleteItem={deleteItem}
        key={todo.id}
      />
    ));
  }

  function addNewTodo(e) {
    e.preventDefault();
    if (content.trim()) {
      const valueObj = {
        id: crypto.randomUUID(),
        text: content.trim(),
        completed: false,
      };
      setTodos(prev => [...prev, valueObj]);
      setContent("");
    }
  }
  function setStatusItem(todo, checkStatus = false) {
    const todoUpdated = { ...todo, completed: checkStatus };
    setTodos((prev) =>
      prev.map((user) => (user.id === todo.id ? todoUpdated : user)),
    );
  }

  function deleteItem(id) {
    setTodos((prev) => prev.filter((user) => user.id !== id));
  }
  return (
    <>
      <h2>My Todo App </h2>
      <form onSubmit={addNewTodo} noValidate>
        <input
          className="todo-app-input"
          type="text"
          value={content}
          placeholder="Nhập Công Việc Cần Làm"
          onChange={e => setContent(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {renderTodos()}
    </>
  );
}
