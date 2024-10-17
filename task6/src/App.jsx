import React, { useState } from "react";

function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to handle input changes
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask.trim()].sort((a, b) =>
        a.localeCompare(b)
      );
      return updatedTasks;
    });
    setNewTask(""); // Clear input field after adding task
  };

  // Function to remove a task
  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task, index) => index !== indexToRemove)
    );
  };

  // Styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", // Full viewport height to center vertically
      width: "100vw",  // Full viewport width
      backgroundColor: "#f0f4f8",
      fontFamily: "Arial, sans-serif",
    },
    appTitle: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    inputContainer: {
      display: "flex",
      marginBottom: "20px",
    },
    inputField: {
      padding: "10px",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginRight: "10px",
      width: "300px",
    },
    addButton: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    todoList: {
      listStyleType: "none",
      padding: 0,
      marginTop: "20px", // Adjust spacing from the input
    },
    todoItem: {
      backgroundColor: "#fff",
      padding: "10px 20px",
      margin: "10px 0",
      width: "350px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "5px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    deleteButton: {
      padding: "5px 10px",
      fontSize: "0.9rem",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.appTitle}>Todo List App</h1>

      {/* Input field for adding new tasks */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter new task"
          style={styles.inputField}
        />
        {/* Add button */}
        <button style={styles.addButton} onClick={addTask}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={styles.todoList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.todoItem}>
            {task}
            {/* Delete button */}
            <button style={styles.deleteButton} onClick={() => removeTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListApp;
