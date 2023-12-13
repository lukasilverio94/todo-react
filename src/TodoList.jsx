/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list-group-flush">
      {todos.length === 0 && "No Todos to display"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
        // id={todo.id}
        // completed={todo.completed}
        // title={todo.title}
        // instead pass like this , pass all the props
      })}
    </ul>
  );
}
