import React, { useState, useEffect } from "react";

function App() {
  // Load tasks from localStorage when the component mounts
  const getStoredTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  // States for tasks and input
  const [task, setTask] = useState(""); // Input for new task
  const [tasks, setTasks] = useState(getStoredTasks); // Store list of tasks

  // State for editing
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingText, setEditingText] = useState("");

  // Save tasks to localStorage whenever `tasks` changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Start editing a task
  const startEdit = (index, currentTask) => {
    setEditingIndex(index);
    setEditingText(currentTask);
  };

  // Save edited task
  const saveEdit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(-1);
    setEditingText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingIndex(-1);
    setEditingText("");
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]); // Add new task to state
      setTask(""); // Clear input field
    }
  };

  // Delete a task
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "10px", margin: "10px", width: "200px" }}
      />
      <button
        onClick={addTask}
        style={{
          padding: "10px",
          margin: "10px",
          backgroundColor: "green",
          color: "white",
          fontWeight: "bolder",
          fontSize: "large",
          borderRadius: "2px",
          border: "none",
        }}
      >
        Add Task
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  style={{ padding: "10px", margin: "10px", width: "140px" }}
                />
                <button
                  onClick={() => saveEdit(index)}
                  style={{
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "green",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "small",
                    borderRadius: "2px",
                    border: "none",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  style={{
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "small",
                    borderRadius: "2px",
                    border: "none",
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleTaskCompletion(index)}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => startEdit(index, task.text)}
                  style={{
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "cyan",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "large",
                    borderRadius: "2px",
                    border: "none",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "large",
                    borderRadius: "2px",
                    border: "none",
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
