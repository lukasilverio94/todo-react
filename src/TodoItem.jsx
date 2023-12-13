import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li
      id="todo_list_item"
      className="list-group-item mb-2 d-flex justify-content-between  border-bottom border-light py-2"
    >
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className="form-check-input me-2 "
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger btn-sm ms-2 "
      >
        <FontAwesomeIcon icon={faTrash} size="md" />
      </button>
    </li>
  );
}
