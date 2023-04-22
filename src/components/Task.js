import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", category: "Home" },
    { id: 2, text: "Do laundry", category: "Home" },
    { id: 3, text: "Finish project", category: "Work" },
  ]);

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            category={task.category}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ id, text, category, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(id);
  };

  return (
    <li>
      {text} - {category}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default App;