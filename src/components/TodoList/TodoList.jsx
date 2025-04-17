import { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState(""); // Строка яка береться з input
  const [todos, setTodos] = useState([]); // Список ToDo у вигляді масиву

  const addTodo = () => {
    if (text.trim() === "") return; // Перевірка на пустий рядок

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]); // Додаємо новий ToDo до списку
    setText(""); // Очищаємо поле вводу
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    ); // Перемикаємо статус ToDo
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Видаляємо ToDo з списку
  };

  return (
    <div className="todo-list max-w-md mx-auto mt-10 p-4 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        lassName="text-2xl font-bold text-center mb-4"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 px-3 py-2 mb-2 rounded"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
