import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  const [newTodo, setNewTodo] = useState({ name: "", age: "" });
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodo = [...todo];
      updatedTodo[editIndex] = { ...newTodo, completed: updatedTodo[editIndex].completed };
      setTodo(updatedTodo);
      setEditIndex(null);
    } else {
      setTodo([...todo, { ...newTodo, completed: false }]);
    }
    setNewTodo({ tarefa: ""});
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  const handleEdit = (index) => {
    const editedItem = todo[index];
    setNewTodo({ tarefa: editedItem.tarefa});
    setEditIndex(index);
  };

  const toggleComplete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoForm
        newTodo={newTodo}
        editIndex={editIndex}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoTable todo={todo}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;