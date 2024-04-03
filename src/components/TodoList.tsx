import { TodoItem } from './TodoItem';
import { Todo } from '../models/Todo';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
}

export function TodoList(props: TodoListProps) {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggleTodo={props.onToggleTodo} />
      ))}
    </ul>
  );
}
