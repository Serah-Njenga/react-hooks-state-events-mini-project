import { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="details">Details:</label>
      <input
        type="text"
        id="details"
        name="details"
        value={text}
        onChange={handleTextChange}
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={handleCategoryChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;