import { TodoItem } from './TodoItem';
import { Todo } from '../models/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

export function TodoList({todos,onToggleTodo}: TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
}
