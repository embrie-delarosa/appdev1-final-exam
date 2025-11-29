import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todos/todosSlice";
import AddTodoForm from "../components/AddTodoForm.jsx";
import TodoList from "../components/TodoList";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const [theme, setTheme] = useState("standard");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("savedTheme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme + update body class
  useEffect(() => {
    localStorage.setItem("savedTheme", theme);
    document.body.className = theme;
  }, [theme]);

  // Fetch todos once
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="app-container">
      <h1 id="title" className={theme === "darker" ? "darker-title" : ""}>
        To-Do List
      </h1>

      {/* THEME BUTTONS */}
      <div className="theme-buttons">
        <button onClick={() => setTheme("standard")} className="standard-theme">
          Standard
        </button>
        <button onClick={() => setTheme("light")} className="light-theme">
          Light
        </button>
        <button onClick={() => setTheme("darker")} className="darker-theme">
          Darker
        </button>
      </div>

      {/* FORM (uses your AddTodoForm component) */}
      <AddTodoForm theme={theme} />

      {/* LIST (uses your TodoList component) */}
      <TodoList todos={todos} theme={theme} />
    </div>
  );
}

export default Todos;
