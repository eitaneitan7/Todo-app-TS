import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { Filter } from './components/Filter';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Todo } from './models/Todo'; //? interface for creating todo


export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // ? Add new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  //? switching todo from completed to active and back
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  //? Handle button highlight and which todos to show.
  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
  };

  //? Logic of filtering todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center grow">
        <AddTodoForm onAddTodo={addTodo} />
        <Filter currentFilter={filter} onFilterChange={handleFilterChange} />
        <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} />
      </main>
      <Footer />
    </div>
  );
};
