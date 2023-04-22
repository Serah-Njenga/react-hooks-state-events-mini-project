import { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleCategorySelect(category) {
    setCategory(category);
  }

  function handleTaskDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const visibleTasks =
    category === "All"
      ? tasks
      : tasks.filter((task) => task.category === category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleTaskDelete} />
    </div>
  );
}

export default App;
