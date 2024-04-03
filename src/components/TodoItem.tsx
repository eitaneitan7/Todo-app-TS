import { Todo } from '../models/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
}

export function TodoItem({todo,onToggleTodo}: TodoItemProps) {
  return (
    <li
      className={`p-2 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
      onClick={() => onToggleTodo(todo.id)}
    >
      {todo.text}
    </li>
  );
}
