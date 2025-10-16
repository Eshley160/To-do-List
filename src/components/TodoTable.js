function TodoTable({ todo, handleEdit, handleDelete , toggleComplete}) {
    return (
      <div className="todo-table">
        <table>
          <thead>
            <tr>
              <th>Concluído</th>
              <th>Tarefa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todo.length === 0 ? (
              <tr>
                <td colSpan="4">Sem dados ainda.</td>
              </tr>
            ) : (
              todo.map((item, index) => (
                <tr key={index} className={item.completed ? "completed" : ""}> 
                    <td>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleComplete(index)}
                    />
                    </td>
                    <td>{item.tarefa}</td>
                    <td>
                        <button onClick={() => handleEdit(index)} class="button">Edit</button>
                        <button onClick={() => handleDelete(index)} class="button">Delete</button>
                    </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TodoTable;