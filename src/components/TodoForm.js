function TodoForm({ newTodo, editIndex, handleChange, handleSubmit }) {
    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <div>
          <input
            type="text"
            name="tarefa"
            placeholder="Insira a tarefa..."
            value={newTodo.tarefa}
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="button">{editIndex !== null ? "Alterar" : "Adicionar tarefa"}</button>
      </form>
    );
  }
  
  export default TodoForm;