import React, { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

export function AddTodoForm({onAddTodo} : AddTodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    onAddTodo(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center gap-4 my-4'>
      <input type="text" value={text} onChange={e => setText(e.target.value)} className="border p-2 mr-2"/>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Todo</button>
    </form>
  );
}
