import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "simple task", isDone: false }
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTodos([...todos, { task: newTask, isDone: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  function markAsDone(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isDone: true } : todo
      )
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add the task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <br />
      <button onClick={addTask}>ADD</button>
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "gray" : "black"
              }}
            >
              {todo.task}
            </span>{" "}
            {!todo.isDone && (
              <button onClick={() => markAsDone(index)}>Done</button>
            )}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
